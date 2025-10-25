const express = require('express');
const router = express.Router();
const { getMenu, addMenuItem, updateMenuItem, deleteMenuItem } = require('../controllers/menuController');

// GET all menu items
router.get('/', getMenu);

// POST add a new menu item
router.post('/', addMenuItem);

// PUT update a menu item
router.put('/:id', updateMenuItem);

// DELETE a menu item
router.delete('/:id', deleteMenuItem);

module.exports = router;
