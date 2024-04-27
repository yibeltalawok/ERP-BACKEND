// routes/driverRoutes.js
const express = require('express');
const router = express.Router();
const IncentiveSummaryController = require('../controllers/incentiveSummaryController');

// Assuming you want to upload files for creating and updating incentiveSummarys
router.post('/incentiveSummarys', IncentiveSummaryController.createIncentiveSummary);
router.get('/incentiveSummarys', IncentiveSummaryController.getAllIncentiveSummary);
router.get('/incentiveSummarys/:id', IncentiveSummaryController.getIncentiveSummaryById);
router.put('/incentiveSummarys/:id', IncentiveSummaryController.updateIncentiveSummary);
router.delete('/incentiveSummarys/:id', IncentiveSummaryController.deleteIncentiveSummary);

module.exports = router;
