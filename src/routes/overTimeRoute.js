// routes/punishmentRoutes.js
const express = require('express');
const router = express.Router();
const OverTimeController = require('../controllers/overTimeController');

router.get('/overTime', OverTimeController.getAllOverTime);
router.get('/overTime/:id', OverTimeController.getOverTimeById);
router.post('/overTime', OverTimeController.createOverTime);
router.put('/overTime/:id', OverTimeController.updateOverTime);
router.delete('/overTime/:id', OverTimeController.deleteOverTime);

module.exports = router;
