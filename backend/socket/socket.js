import isIOAuthenticated from "../middlewares/isIOAuthenticated.js";
import express from "express";
import http from "http";
import { Server } from "socket.io";

export const userSocket = new Map();
const app = express();
const server = http.createServer(app);
const io = new Server(server , {
    cors : {
        origin : "http://localhost:5173",
        method : ["GET", "POST"],
        credentials : true
    }
});

io.use(isIOAuthenticated);

io.on("connection", (socket) => {
    console.log(socket.id, "connected");
    userSocket.set(socket.userId, socket.id);
    console.log(socket.userId, socket.id);
    
    socket.on("disconnect", () => {
        userSocket.delete(socket.userId);
        console.log(socket.id,"disconnected");
    })

    socket.on("send", (data) => { // for group chats - broadcast messages
        socket.broadcast.emit("send",data);
    })

    socket.on("join", (rid) => { // to join groups
        const receiverSocket = userSocket.get(rid);
        socket.join(receiverSocket);
    })
    
})

export {app, io, server}
