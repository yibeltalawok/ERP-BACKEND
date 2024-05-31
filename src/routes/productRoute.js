// routes/busRoutes.js
const express = require('express');
const router = express.Router();
const productController = require('../controllers/productController');
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
// Create a new bus
router.post('/products',upload.array('photo'), productController.createProduct);

// Get all products
router.get('/products', productController.getAllProduct);

// Get a specific bus by ID
router.get('/products/:id', productController.getProductById);

// Update a bus by ID
router.put('/products/:id',upload.array('photo'), productController.updateProduct);

// Delete a bus by ID
router.delete('/products/:id', productController.deleteProduct);

module.exports = router;
