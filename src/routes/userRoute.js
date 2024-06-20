// routes/UserRoutes.js
const express = require('express');
const router = express.Router();
const userController = require('../controllers/usersController');
const { authenticateToken } = require('../middleware/authMiddleware');
// CRUD routes

// Create User
router.post('/login', userController.loginUser);

module.exports = router;
