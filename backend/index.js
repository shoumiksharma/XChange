import express, { urlencoded } from 'express'
import dotenv from 'dotenv'
import userRoutes from './routes/userRoutes.js'
import roomRoutes from './routes/roomRoutes.js'
import connectDB from './config/database.js';
import cors from 'cors';
import cookieParser from 'cookie-parser';
import path from 'path';

const app = express();

dotenv.config();
const PORT = process.env.PORT || 8080;

const __dirname = path.resolve();

app.use(cors({
    origin: `${process.env.origin}`, // Allow only requests from your frontend's address
    // methods: ['GET', 'POST'],       // Allow specific HTTP methods
    credentials: true,               // Allow cookies (if needed)
}));
app.use(urlencoded({ extended: true }));
app.use(cookieParser());

app.use(express.json());


app.use("/api/v1/user", userRoutes);
app.use("/api/v1/room", roomRoutes);

app.use(express.static(path.join(__dirname, "/frontend/dist", 'build')));
app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, 'frontend', 'dist', 'index.html'));
});

app.listen(PORT, () => {
    connectDB();
    console.log(`Server running on port ${PORT}`);
})