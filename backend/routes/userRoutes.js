import express from "express";
import { logIn, logOut, signIn } from "../controllers/userController.js";

const router = express.Router();
router.post("/signIn", signIn);
router.post("/logIn", logIn);
router.post("/logOut", logOut);
export default router;