// import mongoose from "mongoose";

// const connectDB = async () => {
//     try{
//         await mongoose.connect(process.env.MONGO_URL);
//         console.log("Connected to MongoDB");
//     }

//     catch(err){
//         console.log("Error : ", err);
//     }
// }

// export default connectDB;



import mongoose from "mongoose";

const connectDB = async () => {
    try {
        await mongoose.connect(process.env.MONGO_URL, {
            serverSelectionTimeoutMS: 30000,  // Adjust the server selection timeout (default: 30 seconds)
            socketTimeoutMS: 45000,  // Optional: Set socket timeout (default: 30 seconds)
        });
        console.log("Connected to MongoDB");
    } catch (err) {
        console.log("Error: ", err);
    }
};

export default connectDB;