// IncentiveRoutes.js
const express = require('express');
const router = express.Router();
const IncentiveController = require('../controllers/incentivController');

router.get('/incentives', IncentiveController.getAllIncentive);
router.get('/incentives/:id', IncentiveController.getIncentiveById);
router.post('/incentives', IncentiveController.createIncentive);
router.put('/incentives/:id', IncentiveController.updateIncentive);
router.delete('/incentives/:id', IncentiveController.deleteIncentive);

module.exports = router;
