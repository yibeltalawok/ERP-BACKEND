// routes/customerRoutes.js
const express = require('express');
const router = express.Router();
const multer = require('multer');  // Add this line to import multer
const path = require('path');
const customerController = require('../controllers/customerController');
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
// Routes for customer module
router.post('/customers', upload.array('photo'), customerController.createCustomer);
router.get('/customers', customerController.getAllCustomer);
router.get('/customers/:id', customerController.getCustomerById);
router.put('/customers/:id', upload.array('photo'), customerController.updateCustomer); // Added route for updating customers
router.delete('/customers/:id', customerController.deleteCustomer);

module.exports = router;
