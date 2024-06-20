const { validationResult } = require('express-validator');
const Attendance = require('../models/attendanceModel');
const Employee = require('../models/employeeModel');
const { model } = require('mongoose');
exports.getAllAttendance = async (req, res, next) => {
  try {
    const attendances = await Attendance.find().populate('employee');
    res.json(attendances);
  } catch (error) {
    console.error('Error getting attendances:', error.message);
    next(error);
  }
};

exports.getAttendanceById = async (req, res, next) => {
  const { id } = req.params;
  try {
    const attendance = await Attendance.findById(id);
    if (!attendance) {
      res.status(404).json({ error: 'attendance is not found.' });
    } else {
      res.json(attendance);
    }
  } catch (error) {
    console.error('Error getting attendance by ID:', error.message);
    next(error);
  }
};

exports.createAttendance = async (req, res, next) => {
  try {
    // Hash the password before storing it in the database
    const newAttendance = new Attendance({ ...req.body});
    const savedAttendance = await newAttendance.save();
    res.status(201).json(savedAttendance);
  } catch (error) {
    console.error('Error creating attendance:', error.message);
    next(error);
  }};

exports.updateAttendance = async (req, res, next) => {
  const { id } = req.params;
  console.log(id,req.body)
  try {
    const updatedAttendance = await Attendance.findByIdAndUpdate(id, req.body, {
      new: true,
    });
    if (!updatedAttendance) {
      res.status(404).json({ error: 'Attendance is not found.' });
    } else {
      res.json(updatedAttendance);
    }
  } catch (error) {
    console.error('Error updating attendance:', error.message);
    next(error);
  }
};

// Delete User by ID
exports.deleteAttendance = async (req, res, next) => {
  const { id } = req.params;
  try {
    const deletedAttendance = await Attendance.findByIdAndDelete(id);
    if (!deletedAttendance) {
      res.status(404).json({ error: 'Attendance not found.' });
    } else {
      res.json({ message: 'Attendance deleted successfully.' });
    }
  } catch (error) {
    console.error('Error deleting attendance:', error.message);
    next(error);
  }
};
// get attendance by params
exports.getAttendanceByParams = async (req, res) => {
  try {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }
    const { dateAttended } = req.query;
    // Validate if dateAttended is present
    if (!dateAttended) {
      return res.status(400).json({ error: 'dateAttended is a required parameter' });
    }
    const attendances = await Attendance.find({
      dateAttended: dateAttended
    }).populate('employee'); // Populate the 'employee' field
  console.log(attendances)
    const formattedAttendance = attendances.map((attendance) => {
      if (!attendance.employee) {
        attendance.employee = null;
      }
      return attendance;
    });

    res.status(200).json(formattedAttendance);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
};
// get attendance by params
exports.getAttendanceByDateRange = async (req, res) => {
  try {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }
    const { startDate, endDate } = req.query;
    const start = new Date(startDate);
    const end = new Date(endDate);
    // console.log("start=",start,"end-",end)
    // Validate if dateAttended is present
    if (!start,!end) {
      return res.status(400).json({ error: 'dateAttended is a required parameter' });
    }
    const attendances = await Attendance.find({
      dateAttended: {
        $gte: start,
        $lte: end,
      },
    }).populate('employee'); // Populate the 'employee' field
    const formattedAttendance = attendances.map((attendance) => {
      if (!attendance.employee) {
        attendance.employee = null;
      }
      return attendance;
    });

    res.status(200).json(formattedAttendance);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
};

// get attendance by params
exports.getAttendanceByParams = async (req, res) => {
  try {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }
    const { dateAttended } = req.query;
    // Validate if dateAttended is present
    if (!dateAttended) {
      return res.status(400).json({ error: 'dateAttended is a required parameter' });
    }
    const attendances = await Attendance.find({
      dateAttended: dateAttended
    }).populate('employee'); // Populate the 'employee' field
  console.log(attendances)
    const formattedAttendance = attendances.map((attendance) => {
      if (!attendance.employee) {
        attendance.employee = null;
      }
      return attendance;
    });

    res.status(200).json(formattedAttendance);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
};
// Delete attendance by date-range
exports.deleteAllData = async (req, res) => {
  try {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }
    const { startDate, endDate } = req.query;
    const start = new Date(startDate);
    const end = new Date(endDate);
    // Validate if dateAttended is present
    if (!start,!end) {
      return res.status(400).json({ error: 'dateAttended is a required parameter' });
    }
    const attendances = await Attendance.deleteMany({
      dateAttended: {
        $gte: start,
        $lte: end,
      },
    }); 
    res.status(200).json(attendances);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
};