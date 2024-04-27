const express = require('express');
const router = express.Router();
const ItemController = require('../controllers/itemController');

// Routes for CRUD operations of items
router.get('/items', ItemController.getAllItem);
router.get('/items/:id', ItemController.getItemById);
router.post('/items', ItemController.createItem);
router.put('/items/:id', ItemController.updateItem);
router.delete('/items/:id', ItemController.deleteItem);

module.exports = router;
