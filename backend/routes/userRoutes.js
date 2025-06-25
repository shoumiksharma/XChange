import express from "express";
import { logIn, logOut, signIn, fetchProfile, updateUser, fetchUserData } from "../controllers/userController.js";
import isAuthenticated from "../middlewares/isAuthenticated.js";
import { userAuthentication } from "../controllers/userAuthentication.js";

const router = express.Router();

router.post("/signIn", signIn);
router.post("/logIn", logIn);
router.post("/logOut", logOut);

router.use(isAuthenticated);
router.get("/", fetchProfile);
router.get("/data", fetchUserData);
router.post("/update", updateUser);
router.get("/authentication", userAuthentication);
export default router;