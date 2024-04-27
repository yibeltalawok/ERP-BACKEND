// routes/busRoutes.js
const express = require('express');
const router = express.Router();
const productController = require('../controllers/productController');

// Create a new bus
router.post('/products', productController.createProduct);

// Get all products
router.get('/products', productController.getAllProduct);

// Get a specific bus by ID
router.get('/products/:id', productController.getProductById);

// Update a bus by ID
router.put('/products/:id', productController.updateProduct);

// Delete a bus by ID
router.delete('/products/:id', productController.deleteProduct);

module.exports = router;
