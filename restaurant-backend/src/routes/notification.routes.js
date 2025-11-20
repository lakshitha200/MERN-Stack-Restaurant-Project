import express from "express";
import { getMyNotifications, markAsRead } from "../controllers/notification.controller.js";
import { protect } from "../middleware/auth.js";

const router = express.Router();

// Get notifications for logged-in user
router.get("/", protect, getMyNotifications);

// Mark a notification as read
router.put("/:id/read", protect, markAsRead);

export default router;
