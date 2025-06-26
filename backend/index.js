import express, { urlencoded } from 'express'
import dotenv from 'dotenv'
import userRoutes from './routes/userRoutes.js'
import roomRoutes from './routes/roomRoutes.js'
import messageRoutes from './routes/messageRoutes.js'
import connectDB from './config/database.js';
import cors from 'cors';
import cookieParser from 'cookie-parser';
import path from 'path';
import {app, server} from './socket/socket.js'
import isAuthenticated from './middlewares/isAuthenticated.js'

dotenv.config();
const PORT = process.env.PORT || 8080;

const __dirname = path.resolve();

// app.use(cors({
//     origin: `${process.env.origin}`, // Allow only requests from your frontend's address
//     // methods: ['GET', 'POST'],       // Allow specific HTTP methods
//     credentials: true,               // Allow cookies (if needed)
// }));
app.use(urlencoded({ extended: true }));
app.use(cookieParser());
app.use(express.json());


app.use("/api/v1/user", userRoutes);
app.use("/api/v1/room", isAuthenticated, roomRoutes);
app.use("/api/v1/message", isAuthenticated, messageRoutes);


app.use(express.static(path.join(__dirname, "/frontend/dist")));
app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, 'frontend', 'dist', 'index.html'));
});

server.listen(PORT, () => {
    connectDB();
    console.log(`Server running on port ${PORT}`);
})