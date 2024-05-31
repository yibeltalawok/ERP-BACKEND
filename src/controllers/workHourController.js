const WorkHour = require('../models/workHourModel');
exports.getAllWorkHour = async (req, res, next) => {
  try {
    const allWorkHours = await WorkHour.find();
    res.json(allWorkHours);
  } catch (error) {
    console.error('Error getting WorkHours:', error.message);
    next(error);
  }
};

exports.getWorkHourById = async (req, res, next) => {
  const { id } = req.params;
  try {
    const getWorkHour = await WorkHour.findById(id);
    if (!getWorkHour) {
      res.status(404).json({ error: 'WorkHour not found.' });
    } else {
      res.json(getWorkHour);
    }
  } catch (error) {
    console.error('Error getting WorkHour by ID:', error.message);
    next(error);
  }
};
exports.createWorkHour = async (req, res, next) => {
  try {
    console.log(req.body)
    // Hash the password before storing it in the database
    const newWorkHour = new WorkHour({ ...req.body});
    const savedWorkHour = await newWorkHour.save();
    res.status(201).json(savedWorkHour);
  } catch (error) {
    console.error('Error creating WorkHour:', error.message);
    next(error);
  }};

exports.updateWorkHour = async (req, res, next) => {
  const { id } = req.params;
  try {
    const updatedWorkHour = await WorkHour.findByIdAndUpdate(id, req.body, {
      new: true,
    });
    if (!updatedWorkHour) {
      res.status(404).json({ error: 'WorkHour is not found.' });
    } else {
      res.json(updatedWorkHour);
    }
  } catch (error) {
    console.error('Error updating WorkHour:', error.message);
    next(error);
  }
};

// Delete User by ID
exports.deleteWorkHour = async (req, res, next) => {
  const { id } = req.params;
  try {
    const deletedWorkHour = await WorkHour.findByIdAndDelete(id);
    if (!deletedWorkHour) {
      res.status(404).json({ error: 'WorkHour not found.' });
    } else {
      res.json({ message: 'WorkHour deleted successfully.' });
    }
  } catch (error) {
    console.error('Error deleting WorkHour:', error.message);
    next(error);
  }
};