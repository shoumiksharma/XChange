import express from 'express';
import { getList, getMessage, sendMessage } from '../controllers/messageController.js';
import isAuthenticated from '../middlewares/isAuthenticated.js';

const router = express.Router();

router.post('/send', sendMessage);
router.post('/get', getMessage)
router.get('/list', getList);
export default router;