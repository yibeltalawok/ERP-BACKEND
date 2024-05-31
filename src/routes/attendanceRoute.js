// routes/attendanceRoutes.js
const express = require('express');
const router = express.Router();
const { query } = require('express-validator');
const attendanceController = require('../controllers/attendanceController');
// Validation middleware for getRoutesByParams
const getRoutesByParamsValidation = [
    query('date').optional().isString(),
  ];
router.get('/attendances', attendanceController.getAllAttendance);
router.get('/attendances/:id', attendanceController.getAttendanceById);
router.post('/attendances', attendanceController.createAttendance);
router.put('/attendances/:id', attendanceController.updateAttendance);
router.delete('/attendances/:id', attendanceController.deleteAttendance);
router.get('/getAttendance',getRoutesByParamsValidation,attendanceController.getAttendanceByParams);
router.get('/search',attendanceController.getAttendanceByDateRange);
module.exports = router;
