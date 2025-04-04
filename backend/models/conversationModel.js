import mongoose from "mongoose";

const conversationModel = new mongoose.Schema(
    {
        participants : [
            {
                type : mongoose.Schema.Types.ObjectId,
                ref : "user"
            }
        ],

        messages : [
            {
                type : mongoose.Schema.Types.ObjectId,
                ref : "message"
            }
        ]
    }, {timestamps : true}
)

export const Conversation = mongoose.model("Conversation", conversationModel);