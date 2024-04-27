const express = require('express');
const router = express.Router();
const WorkDayCntroller = require('../controllers/workDayController');

// Create a new driver booking
router.post('/work-day', WorkDayCntroller.createWorkDay);

// Get all driver work-day
router.get('/work-day', WorkDayCntroller.getAllWorkDay);

// Get driver booking by ID
router.get('/work-day/:id', WorkDayCntroller.getWorkDayById);

// Update driver booking by ID
router.put('/work-day/:id', WorkDayCntroller.updateWorkDay);

// Delete driver booking by ID
router.delete('/work-day/:id', WorkDayCntroller.deleteWorkDay);

module.exports = router;
