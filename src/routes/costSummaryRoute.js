// routes/busCostSummaryRoutes.js
const express = require('express');
const router = express.Router();
const costSummaryController = require('../controllers/costSummaryController');

// Routes for bus costSummarys
router.post('/costSummarys', costSummaryController.createCostSummary);
router.get('/costSummarys', costSummaryController.getAllCostSummary);
router.get('/costSummarys/:id', costSummaryController.getCostSummaryById);
router.put('/costSummarys/:id', costSummaryController.updateCostSummary);
router.delete('/costSummarys/:id', costSummaryController.deleteCostSummary);

module.exports = router;