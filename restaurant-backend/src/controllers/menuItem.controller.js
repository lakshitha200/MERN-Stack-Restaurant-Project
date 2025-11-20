import MenuItem from "../models/MenuItem.js";

// Create new menu item (admin only)
export const createMenuItem = async (req, res) => {
  try {
    const { name, description, price, category, image, isAvailable } = req.body;

    const newMenuItem = await MenuItem.create({
      name,
      description,
      price,
      category,
      image,
      isAvailable
    });

    res.status(201).json({ message: "Menu item created", menuItem: newMenuItem });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

// Get all menu items
export const getAllMenuItems = async (req, res) => {
  try {
    const menuItems = await MenuItem.find().populate("category");
    res.json(menuItems);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

// Get single menu item
export const getMenuItemById = async (req, res) => {
  try {
    const menuItem = await MenuItem.findById(req.params.id).populate("category");
    if (!menuItem) return res.status(404).json({ message: "Menu item not found" });
    res.json(menuItem);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

// Update menu item (admin only)
export const updateMenuItem = async (req, res) => {
  try {
    const updatedMenuItem = await MenuItem.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true }
    );
    if (!updatedMenuItem) return res.status(404).json({ message: "Menu item not found" });
    res.json({ message: "Menu item updated", menuItem: updatedMenuItem });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

// Delete menu item (admin only)
export const deleteMenuItem = async (req, res) => {
  try {
    const deletedMenuItem = await MenuItem.findByIdAndDelete(req.params.id);
    if (!deletedMenuItem) return res.status(404).json({ message: "Menu item not found" });
    res.json({ message: "Menu item deleted" });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};
