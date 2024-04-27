// routes/CostPerMinuteRoutes.js
const express = require('express');
const CostPerMinuteController = require('../controllers/costPerMinuteController');

const router = express.Router();

// Routes
router.post('/costPerMinutes', CostPerMinuteController.createCostPerMinute);
router.get('/costPerMinutes', CostPerMinuteController.getAllCostPerMinute);
router.get('/costPerMinutes/:id', CostPerMinuteController.getCostPerMinuteById);
router.put('/costPerMinutes/:id', CostPerMinuteController.updateCostPerMinute);
router.delete('/costPerMinutes/:id', CostPerMinuteController.deleteCostPerMinute);

module.exports = router;
