import Review from "../models/Review.js";
import MenuItem from "../models/MenuItem.js";

// Add a review for a menu item (customer)
export const addReview = async (req, res) => {
  try {
    const { menuItemId, rating, comment } = req.body;

    // Optional: check if menu item exists
    const menuItem = await MenuItem.findById(menuItemId);
    if (!menuItem) return res.status(404).json({ message: "Menu item not found" });

    const review = await Review.create({
      menuItem: menuItemId,
      user: req.user._id,
      rating,
      comment,
    });

    res.status(201).json({ message: "Review added", review });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

// Get all reviews for a menu item
export const getReviewsForMenuItem = async (req, res) => {
  try {
    const reviews = await Review.find({ menuItem: req.params.menuItemId })
      .populate("user", "name"); // show user name
    res.json(reviews);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};
