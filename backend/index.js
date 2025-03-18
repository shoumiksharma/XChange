import express, { urlencoded } from 'express'
import dotenv from 'dotenv'
import userRoutes from './routes/userRoutes.js'
import connectDB from './config/database.js';
import cors from 'cors';
import cookieParser from 'cookie-parser';

const app = express();

dotenv.config();
const PORT = process.env.PORT || 8080;

app.use(cors({
    origin: 'https://project-xchange.onrender.co', // Allow only requests from your frontend's address
    // methods: ['GET', 'POST'],       // Allow specific HTTP methods
    credentials: true,               // Allow cookies (if needed)
}));
app.use(urlencoded({ extended: true }));
app.use(cookieParser());

app.use(express.json());

app.use("/api/v1/user", userRoutes);

app.listen(PORT, () => {
    connectDB();
    console.log(`Server running on port ${PORT}`);
})