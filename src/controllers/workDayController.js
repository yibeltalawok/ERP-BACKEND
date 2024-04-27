const WorkDay = require('../models/workDayModel');

exports.getAllWorkDay = async (req, res, next) => {
  try {
    const allWorkDays = await WorkDay.find();
    res.json(allWorkDays);
  } catch (error) {
    console.error('Error getting WorkDays:', error.message);
    next(error);
  }
};

exports.getWorkDayById = async (req, res, next) => {
  const { id } = req.params;
  try {
    const getWorkDay = await WorkDay.findById(id);
    if (!getWorkDay) {
      res.status(404).json({ error: 'WorkDay not found.' });
    } else {
      res.json(getWorkDay);
    }
  } catch (error) {
    console.error('Error getting WorkDay by ID:', error.message);
    next(error);
  }
};
exports.createWorkDay = async (req, res, next) => {
  try {
    console.log(req.body)
    // Hash the password before storing it in the database
    const newWorkDay = new WorkDay({ ...req.body});
    const savedWorkDay = await newWorkDay.save();
    res.status(201).json(savedWorkDay);
  } catch (error) {
    console.error('Error creating WorkDay:', error.message);
    next(error);
  }};


exports.updateWorkDay = async (req, res, next) => {
  const { id } = req.params;
  try {
    const updatedWorkDay = await WorkDay.findByIdAndUpdate(id, req.body, {
      new: true,
    });
    if (!updatedWorkDay) {
      res.status(404).json({ error: 'WorkDay is not found.' });
    } else {
      res.json(updatedWorkDay);
    }
  } catch (error) {
    console.error('Error updating WorkDay:', error.message);
    next(error);
  }
};

// Delete User by ID
exports.deleteWorkDay = async (req, res, next) => {
  const { id } = req.params;
  try {
    const deletedWorkDay = await WorkDay.findByIdAndDelete(id);
    if (!deletedWorkDay) {
      res.status(404).json({ error: 'WorkDay not found.' });
    } else {
      res.json({ message: 'WorkDay deleted successfully.' });
    }
  } catch (error) {
    console.error('Error deleting WorkDay:', error.message);
    next(error);
  }
};