// routes/userincentiveSharesRoutes.js
const express = require('express');
const router = express.Router();
const IncentiveSharesController = require('../controllers/incentiveShareController');

// Create a new user incentiveShares
router.post('/incentiveShares', IncentiveSharesController.createIncentiveShare);

// Get all user incentiveSharess
router.get('/incentiveShares', IncentiveSharesController.getAllIncentiveShare);

// Get a single user incentiveShares by ID
router.get('/incentiveShares/:phone', IncentiveSharesController.getIncentiveShareById);

// Update a user incentiveShares
router.put('/incentiveShares/:id', IncentiveSharesController.updateIncentiveShare);

// Delete a user incentiveShares
router.delete('/incentiveShares/:id', IncentiveSharesController.deleteIncentiveShare);

module.exports = router;
