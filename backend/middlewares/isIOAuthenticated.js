import cookie from "cookie";
import jwt from "jsonwebtoken";
const isIOAuthenticated = async (socket, next) => {
    try {

        const cookies = cookie.parse(socket.handshake.headers.cookie || "");
        const token = cookies.xchange;

        if (!token) return next(new Error("No auth token"));

        const decoded = jwt.verify(token, process.env.JWT_SECRET_KEY);

        socket.userId = decoded.userId;
        next();

    }
    
    catch (err) {
        console.error("Socket auth error:", err.message);
        next(new Error("Authentication failed"));
    }
};

export default isIOAuthenticated;