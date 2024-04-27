// routes/customerRoutes.js
const express = require('express');
const router = express.Router();
const customerController = require('../controllers/customerController');

// CRUD routes

// Routes for customer module
router.post('/customers', customerController.createCustomer);
router.get('/customers', customerController.getAllCustomer);
router.get('/customers/:id', customerController.getCustomerById);
router.put('/customers/:id', customerController.updateCustomer); // Added route for updating customers
router.delete('/customers/:id', customerController.deleteCustomer);

module.exports = router;
