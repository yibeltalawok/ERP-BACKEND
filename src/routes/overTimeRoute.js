// routes/punishmentRoutes.js
const express = require('express');
const router = express.Router();
const OverTimeController = require('../controllers/overTimeController');

router.get('/overTimes', OverTimeController.getAllOverTime);
router.get('/overTimes/:id', OverTimeController.getOverTimeById);
router.post('/overTimes', OverTimeController.createOverTime);
router.put('/overTimes/:id', OverTimeController.updateOverTime);
router.delete('/overTimes/:id', OverTimeController.deleteOverTime);

module.exports = router;
