const Order = require('../models/Order');

// Create new order
const createOrder = async (req, res) => {
  try {
    const { items, totalPrice } = req.body;

    if (!items || !totalPrice) {
      return res.status(400).json({ message: 'Items and totalPrice are required' });
    }

    const newOrder = new Order({ items, totalPrice });
    await newOrder.save();

    res.status(201).json({ message: 'Order placed successfully', order: newOrder });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Get all orders
const getOrders = async (req, res) => {
  try {
    const orders = await Order.find().sort({ createdAt: -1 });
    res.json(orders);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

module.exports = { createOrder, getOrders };
