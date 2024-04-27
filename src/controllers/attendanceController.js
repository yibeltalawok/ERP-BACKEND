const Attendance = require('../models/attendanceModel');

exports.getAllAttendance = async (req, res, next) => {
  try {
    const attendances = await Attendance.find();
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
    console.log(req.body)
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