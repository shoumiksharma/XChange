import { User } from "../models/userModel.js";
import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';

export const signIn = async(req, res) => {
    try{
        console.log("req received");
        const {name, username, password, confirmPassword, gender} = req.body;

        if(!name || !username || !password || !confirmPassword || !gender){
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
                gender
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
        const {username, password} = req.body;
        if(!username || !password){
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

        return res
                .status(200)
                .cookie("xchange", token, {
                    httpOnly: true,  // Can't access the cookie via JS
                    sameSite: 'None',
                    secure: true
                })
                .json({message : "Log In Successfull !", name : user.name});
    }

    catch(err){
        console.log("Error : ",err);
    }
}

export const logOut = async(req, res) => {
    try{
        return res
                .status(200)
                .cookie("xchange", "", {httpOnly:true, sameSite:'strict'})
                .json({message : "Log Out Successfull !"});
    }

    catch(err){
        console.log("Error : ",err);
    }
}