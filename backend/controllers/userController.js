import { User } from "../models/userModel.js";
import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';

export const signIn = async(req, res) => {
    try{
        console.log("req received");
        const {name, username, password, confirmPassword, gender, hostel, type, room_no} = req.body;

        if(!name || !username || !password || !confirmPassword || !gender || !hostel || !type || !room_no){
            return res
                    .status(400)
                    .json({message : "All fields are required"});
        }
        else if(password != confirmPassword){
            return res
                    .status(400)
                    .json({message : "Passwords do not match"});
        }

        const user = await User.findOne({username});

        if(user){
            return res
                    .status(400)
                    .json({message : "User already exists"})
        }

        const hashedPassword = await bcrypt.hash(password, 7);

        const profilePhoto = "";

        await User.create(
            {
                name,
                username,
                password : hashedPassword,
                profilePhoto,
                gender,
                hostel,
                type,
                room_no
            }
        )
        return res
                .status(200)
                .json({message : "User SignIn Successfull !"});
    }

    catch(err){
        console.log("Error : ",err);
    }
}

export const logIn = async(req, res) => {
    try{
        console.log(req.body);
        const {username, password} = req.body;
        if(!username || !password){
            console.log("no password or username");
            return res
                    .status(400)
                    .json({message : "All fields are required"})
        }

        const user = await User.findOne({username});
        if(!user){
            return res
                    .status(400)
                    .json({message : "User does not exist. Sign In instead"});
        }

        const isPasswordCorrect = await bcrypt.compare(password, user.password);
        if(!isPasswordCorrect){
            return res
                    .status(400)
                    .json({message : "Incorrect Password"});
        }

        const tokenData = {
            userId : user._id
        }

        const token = jwt.sign(tokenData, process.env.JWT_SECRET_KEY);

        const user_data = {
            name : user.name,
            gender : user.gender
        }

        return res
                .status(200)
                .cookie("xchange", token, {
                    httpOnly: true,  // Can't access the cookie via JS
                    sameSite: "None",
                    secure: 'false'
                })
                .cookie("user_data", JSON.stringify(user_data), {
                    sameSite : "None",
                    secure : 'false'
                })
                .json(
                    {
                        message : "Log In Successfull !", 
                        name : user.name, 
                        data : {
                            name: user.name,
                            userId: user._id
                        }
                    }
                );
    }

    catch(err){
        console.log("Error : ",err);
    }
}

export const logOut = async(req, res) => {
    try{
        return res
                .status(200)
                .cookie("xchange", "", {
                    httpOnly: true,  // Can't access the cookie via JS
                    sameSite: "None",
                    secure: 'false'
                })
                .json({message : "Log Out Successfull !"});
    }

    catch(err){
        console.log("Error : ",err);
    }
}


export const fetchProfile = async(req, res) => {
    try{
        const _id = req.userId;
        const user = await User.findById({_id});
        console.log(user);
        return res
                .status(200)
                .json({user});
    }

    catch(err){
        console.log("Error : ",err);
    }
}

export const fetchUserData = async(req, res) => {
    try{
        const _id = req.userId;
        const user = await User.findById({_id});
        return res
                .status(200)
                .json(
                    {
                        name: user.name,
                        userId: user._id,
                        profilePhoto: user.profilePhoto,
                        gender: user.gender,
                        hostel: user.hostel,
                        type: user.type,
                        room: user.room_no,
                        room_hosted: user.room_hosted,
                        photo: user.photos
                    }
                );
    }

    catch(err){
        console.log("Error : ",err);
    }
}

export const updateUser = async(req, res) => {
    try{
        const _id = req.userId;

        const updatedData = req.body;

        const updatedUser = await User.findByIdAndUpdate(
            _id, 
            updatedData, 
        { new: true, runValidators: true }
        );

        console.log("user : ", updatedUser);

        return res
                .status(200)
                .json({ message: "User updated successfully"});
    } 
    
    catch (error) {

        console.log("Error updating user:", error);
        return res
                .status(500)
                .json({ message: "Server Error" });

    }
}