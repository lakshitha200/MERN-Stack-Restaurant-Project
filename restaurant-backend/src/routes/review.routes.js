import express from "express";
import { addReview, getReviewsForMenuItem } from "../controllers/review.controller.js";
import { protect } from "../middleware/auth.js";

const router = express.Router();

// Customer adds a review
router.post("/", protect, addReview);

// Get reviews for a menu item
router.get("/:menuItemId", getReviewsForMenuItem);

export default router;
