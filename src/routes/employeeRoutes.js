// routes/employeeRoutes.js
const express = require('express');
const router = express.Router();
const employeeController = require('../controllers/employeeController');
const { authenticateToken } = require('../middleware/authMiddleware');
// const express = require('express');
// const multer = require('multer');  // Add this line to import multer
// const path = require('path');

// // Multer configuration for file uploads
// const storage = multer.diskStorage({
//   destination: (req, file, cb) => {
//     cb(null, './src/uploads/');
//   },
//   filename: (req, file, cb) => {
//     const ext = path.extname(file.originalname);
//     const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1e9);
//     cb(null, file.fieldname + '-' + uniqueSuffix + ext);
//   },
// });
// const upload = multer({ storage });

// Create User
router.post('/employees', employeeController.createEmployee);

// Get all Employees
router.get('/employees', employeeController.getAllEmployee);

// Get User by ID
router.get('/employees/:id', employeeController.getEmployeeById);

// Update User by ID
router.put('/employees/:id', employeeController.updateEmployee);

// Delete User by ID
router.delete('/employees/:id', employeeController.deleteEmployee);

module.exports = router;
