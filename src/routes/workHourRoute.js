const express = require('express');
const router = express.Router();
const WorkHourCntroller = require('../controllers/workHourController');

// Create a new driver booking
router.post('/work-hour', WorkHourCntroller.createWorkHour);

// Get all driver work-hour
router.get('/work-hour', WorkHourCntroller.getAllWorkHour);

// Get driver booking by ID
router.get('/work-hour/:id', WorkHourCntroller.getWorkHourById);

// Update driver booking by ID
router.put('/work-hour/:id', WorkHourCntroller.updateWorkHour);

// Delete driver booking by ID
router.delete('/work-hour/:id', WorkHourCntroller.deleteWorkHour);

module.exports = router;
