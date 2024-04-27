// routes/lostAndFoundRoute.js
const express = require('express');
const router = express.Router();
const IncentiveSlabController = require('../controllers/IncentiveSlabController');

// Routes for Lost and Found Material module
router.post('/incentiveSlabs', IncentiveSlabController.createIncentiveSlab);
router.get('/incentiveSlabs', IncentiveSlabController.getAllIncentiveSlab);
router.get('/incentiveSlabs/:id', IncentiveSlabController.getIncentiveSlabById);
router.put('/incentiveSlabs/:id', IncentiveSlabController.updateIncentiveSlab);
router.delete('/incentiveSlabs/:id', IncentiveSlabController.deleteIncentiveSlab);

module.exports = router;
