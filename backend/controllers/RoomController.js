import { User } from "../models/userModel.js";
import { Image } from '../models/imageModel.js';

export const setRoomPhoto = async(req, res) => {
    try {

        const savedImage = await Image.create({
            image: req.file.buffer,
            contentType: req.file.mimetype,
            filename: req.file.originalname
        });

        const _id = req.userId;

        const updatedUser = await User.findByIdAndUpdate(
            _id,
            { photos: savedImage._id },
            { new: true }
        );

        console.log("user : ",updatedUser);

        return res
                .status(200)
                .json({ message: "Image uploaded successfully" })

    } catch (error) {
        console.error("Error uploading image:", error);
        return res
                .status(500)
                .json({ message: "Server Error" })
    }
}

export const getRoomPhoto = async (req, res) => {
    try {
        const userId = req.query.id || req.userId;

        const user = await User.findById(userId).populate('photos');
        
        if (!user.photos) {
            return res
                .json({ message: "No photo found for this user" });
        }

        const image = user.photos;

        return res
                .contentType(image.contentType)
                .send(image.image);

    } catch (error) {
        console.error("Error retrieving image:", error);
        return res
                .status(500)
                .json({ message: "Server Error" })
    }
}





export const searchRoom = async (req, res) => {
    try{
        const {hostel} = req.body;
        const options = { 
            room_hosted : true,
            _id : { $ne: req.userId }
         };
        if(hostel && hostel != 'all'){
            options.hostel = hostel;
        }

        const rooms = await User.find(options);
        // console.log("rooms : ",rooms);

        return res
                .status(200)
                .json({ message : "Rooms fetched", avail_rooms : rooms});
    }

    catch(err){
        console.log("Error : ",err);
    }
} 