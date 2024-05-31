const express = require('express');
const router = express.Router();
const InventoryController = require('../controllers/inventoryController');
const multer = require('multer');  // Add this line to import multer
const path = require('path');
// Multer configuration for file uploads
const storage = multer.diskStorage({
    destination: (req, file, cb) => {
      cb(null, './src/uploads/');
    },
    filename: (req, file, cb) => {
      const ext = path.extname(file.originalname);
      const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1e9);
      cb(null, file.fieldname + '-' + uniqueSuffix + ext);
    },
  });
  const upload = multer({ storage });
// Routes for Inventorys records
router.post('/inventory', upload.array('image'),InventoryController.createInventory);
router.get('/inventory', InventoryController.getAllInventory);
router.get('/inventory/:id', InventoryController.getInventoryById);
router.put('/inventory/:id',upload.array('image'), InventoryController.updateInventory);
router.delete('/inventory/:id', InventoryController.deleteInventory);

module.exports = router;
