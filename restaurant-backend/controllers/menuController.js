const MenuItem = require('../models/MenuItem');

// Get all menu items
const getMenu = async (req, res) => {
  try {
    const menuItems = await MenuItem.find();
    res.json(menuItems);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

// Add new menu item
const addMenuItem = async (req, res) => {
  try {
    const { name, description, price, imageUrl, category } = req.body;
    if (!name || !price || !imageUrl) {
      return res.status(400).json({ message: 'Name, price and imageUrl are required' });
    }

    const newItem = new MenuItem({ name, description, price, imageUrl, category });
    await newItem.save();
    res.status(201).json(newItem);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

// Update menu item
const updateMenuItem = async (req, res) => {
  try {
    const updatedItem = await MenuItem.findByIdAndUpdate(req.params.id, req.body, { new: true });
    res.json(updatedItem);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

// Delete menu item
const deleteMenuItem = async (req, res) => {
  try {
    await MenuItem.findByIdAndDelete(req.params.id);
    res.json({ message: 'Menu item deleted' });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

module.exports = { getMenu, addMenuItem, updateMenuItem, deleteMenuItem };
