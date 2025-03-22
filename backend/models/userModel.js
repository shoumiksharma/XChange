import mongoose from "mongoose";

const userModel = new mongoose.Schema(
    {
        name:{
            type : String,
            required : true
        },
        username : {
            type : String,
            required : true,
            unique : true
        },
        password : {
            type : String,
            required : true
        },
        profilePhoto : {
            type : String,
            default : ""
        },
        gender : {
            type : String,
            enum : ["m", "f"],
            required : true
        },
        hostel:{
            type : Number,
            required : true
        },
        type:{
            type : String,
            required : true
        },
        room_no:{
            type : Number,
            required : true
        },
        photos: {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'Image'
        },
        room_hosted: {
            type: Boolean,
            default: false
        }
    }, {timestamps : true}
)
export const User = mongoose.model("User", userModel);