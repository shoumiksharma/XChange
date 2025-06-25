import express from 'express';
import multer from 'multer';
import { getRoomPhoto, searchRoom, setRoomPhoto } from "../controllers/RoomController.js";
import isAuthenticated from "../middlewares/isAuthenticated.js";

const router = express.Router();
const storage = multer.memoryStorage();
const upload = multer({ storage: storage });

router.post("/update", upload.single("image"), setRoomPhoto);
router.get("/get-photo", getRoomPhoto);
router.post("/search", searchRoom);

export default router;