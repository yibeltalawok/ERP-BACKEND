const express = require('express');
const router = express.Router();
const InventoryController = require('../controllers/inventoryController');

// Routes for Inventorys records
router.post('/Inventorys', InventoryController.createInventory);
router.get('/Inventorys', InventoryController.getAllInventory);
router.get('/Inventorys/:id', InventoryController.getInventoryById);
router.put('/Inventorys/:id', InventoryController.updateInventory);
router.delete('/Inventorys/:id', InventoryController.deleteInventory);

module.exports = router;
