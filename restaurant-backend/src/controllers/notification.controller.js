import Notification from "../models/Notification.js";

// Create a notification (can be called internally)
export const createNotification = async (userId, message) => {
  try {
    const notification = await Notification.create({
      user: userId,
      message,
      read: false,
    });
    return notification;
  } catch (err) {
    console.error("Notification error:", err.message);
  }
};

// Get notifications for a user
export const getMyNotifications = async (req, res) => {
  try {
    const notifications = await Notification.find({ user: req.user._id }).sort({ createdAt: -1 });
    res.json(notifications);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

// Mark notification as read
export const markAsRead = async (req, res) => {
  try {
    const notification = await Notification.findByIdAndUpdate(
      req.params.id,
      { read: true },
      { new: true }
    );
    if (!notification) return res.status(404).json({ message: "Notification not found" });
    res.json(notification);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};
