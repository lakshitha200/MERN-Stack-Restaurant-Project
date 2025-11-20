import express from "express";
import {
  placeOrder,
  getAllOrders,
  getMyOrders,
  updateOrderStatus
} from "../controllers/order.controller.js";
import { protect, admin } from "../middleware/auth.js";

const router = express.Router();

// Customer routes
router.post("/", protect, placeOrder);
router.get("/my-orders", protect, getMyOrders);

// Admin routes
router.get("/", protect, admin, getAllOrders);
router.put("/:id/status", protect, admin, updateOrderStatus);

export default router;
