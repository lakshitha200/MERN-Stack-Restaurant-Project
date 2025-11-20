import express from "express";
import { registerUser, loginUser, getAllUsers } from "../controllers/user.controller.js";
import { protect,admin } from "../middleware/auth.js";

const router = express.Router();

// Public routes
router.post("/register", registerUser);
router.post("/login", loginUser);

// Admin route
router.get("/",protect, admin, getAllUsers);

export default router;
