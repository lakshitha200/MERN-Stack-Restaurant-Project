import Order from "../models/Order.js";
import MenuItem from "../models/MenuItem.js";

// Place a new order (customer)
export const placeOrder = async (req, res) => {
  try {
    const { items, totalAmount } = req.body;

    if (!items || items.length === 0)
      return res.status(400).json({ message: "Order must have at least one item" });

    // Optional: Check availability of each item
    for (let i = 0; i < items.length; i++) {
      const menuItem = await MenuItem.findById(items[i].menuItem);
      if (!menuItem || !menuItem.isAvailable) {
        return res
          .status(400)
          .json({ message: `Item ${items[i].menuItem} is not available` });
      }
    }

    const newOrder = await Order.create({
      customer: req.user._id,
      items,
      totalAmount,
      orderStatus: "placed"
    });

    res.status(201).json({ message: "Order placed successfully", order: newOrder });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

// Get all orders (admin)
export const getAllOrders = async (req, res) => {
  try {
    const orders = await Order.find()
      .populate("customer", "name email")
      .populate("items.menuItem", "name price");
    res.json(orders);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

// Get orders of logged-in customer
export const getMyOrders = async (req, res) => {
  try {
    const orders = await Order.find({ customer: req.user._id })
      .populate("items.menuItem", "name price");
    res.json(orders);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

// Update order status (admin)
export const updateOrderStatus = async (req, res) => {
  try {
    const { orderStatus } = req.body;

    const updatedOrder = await Order.findByIdAndUpdate(
      req.params.id,
      { orderStatus },
      { new: true }
    );

    if (!updatedOrder) return res.status(404).json({ message: "Order not found" });

    res.json({ message: "Order status updated", order: updatedOrder });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};
