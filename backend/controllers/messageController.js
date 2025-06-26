import { Conversation } from "../models/conversationModel.js";
import { Message } from "../models/messageModel.js";
import { User } from "../models/userModel.js";
import { io, userSocket } from "../socket/socket.js";

export const sendMessage = async (req, res) => {
    try{
        console.log(req.body);
        const { rid, msg } = req.body;
        const sid = req.userId;

        let conversation = await Conversation.findOne(
            {
                participants: {$all : [sid,rid]}
            }
        )
        
        if(!conversation){
            conversation = await Conversation.create(
                {
                    participants : [sid,rid],
                }
            )
        }

        const newMessage = await Message.create(
            {
                senderId: sid,
                receiverId: rid,
                message: msg
            }
        )

        if(newMessage){
            conversation.messages.push(newMessage._id);
        }
        else{
            return res
                    .status(400)
                    .json({message : "Message not sent"});
        }

        await conversation.save();

        const socketId = userSocket.get(rid) || userSocket.get(req.userId);
        if(socketId){
            io.to(socketId).emit("receiveMsg", 
                {
                    rid: rid,
                    from : req.userId,
                    message : msg
                }
            );
        }
            

        return res
                .status(201)
                .json({message : "Message sent"});
    }
    catch(err){
        console.log(err);
    }
}

export const getMessage = async(req, res) => {
    try{
        const {rid} = req.body;
        const sid = req.userId;

        const conversation = await Conversation.findOne(
            {
                participants : {$all : [sid,rid]}
            }
        ).populate("messages");

        if(!conversation){
            return res
                    .json({message : "No Messages"});
        }

        // console.log(conversation);

        return res
                .status(200)
                .json({
                    data : conversation.messages.map(item => (
                    {
                        message : item.message,
                        rid : item.receiverId
                    })),
                    message : "Messages retrieved"
                });

    }
    catch(err){
        console.log(err);
    }
}

export const getList = async(req, res) => {
    try{
        const rid = req.userId;
        const data = await Conversation.find(
            {
                participants : {$all : [rid]}
            }
        )

        if(!data){
            return res
                    .status(204)
                    .json({message : "No Conversations"})
        }

        const list = data.map(item => {
            return item.participants.find(id => id != rid);
        })

        const names = await User.find({ _id: { $in: list } }).select("name");

        console.log(names);

        return res
                .status(200)
                .json({
                    data : names,
                    message : "List retrieved"
                });
    }

    catch(err){
        console.log(err);
    }
}