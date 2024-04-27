// routes/CostPerSamRoutes.js
const express = require('express');
const CostPerSamController = require('../controllers/costPerSamController');

const router = express.Router();

// Routes
router.post('/costPerSams', CostPerSamController.createCostPerSam);
router.get('/costPerSams', CostPerSamController.getAllCostPerSam);
router.get('/costPerSams/:id', CostPerSamController.getCostPerSamById);
router.put('/costPerSams/:id', CostPerSamController.updateCostPerSam);
router.delete('/costPerSams/:id', CostPerSamController.deleteCostPerSam);

module.exports = router;
