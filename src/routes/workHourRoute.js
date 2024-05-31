const express = require('express');
const router = express.Router();
const WorkHourCntroller = require('../controllers/workHourController');

// Create a new driver booking
router.post('/work-hours', WorkHourCntroller.createWorkHour);

// Get all driver work-hours
router.get('/work-hours', WorkHourCntroller.getAllWorkHour);

// Get driver booking by ID
router.get('/work-hours/:id', WorkHourCntroller.getWorkHourById);

// Update driver booking by ID
router.put('/work-hours/:id', WorkHourCntroller.updateWorkHour);

// Delete driver booking by ID
router.delete('/work-hours/:id', WorkHourCntroller.deleteWorkHour);

module.exports = router;
