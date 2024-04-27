const OverTime = require('../models/overTimeModel');

exports.getAllOverTime = async (req, res, next) => {
  try {
    const allOverTimes = await OverTime.find();
    res.json(allOverTimes);
  } catch (error) {
    console.error('Error getting OverTimes:', error.message);
    next(error);
  }
};

exports.getOverTimeById = async (req, res, next) => {
  const { id } = req.params;
  try {
    const getOverTime = await OverTime.findById(id);
    if (!getOverTime) {
      res.status(404).json({ error: 'OverTime not found.' });
    } else {
      res.json(getOverTime);
    }
  } catch (error) {
    console.error('Error getting OverTime by ID:', error.message);
    next(error);
  }
};
exports.createOverTime = async (req, res, next) => {
  try {
    console.log(req.body)
    // Hash the password before storing it in the database
    const newOverTime = new OverTime({ ...req.body});
    const savedOverTime = await newOverTime.save();
    res.status(201).json(savedOverTime);
  } catch (error) {
    console.error('Error creating OverTime:', error.message);
    next(error);
  }};


exports.updateOverTime = async (req, res, next) => {
  const { id } = req.params;
  try {
    const updatedOverTime = await OverTime.findByIdAndUpdate(id, req.body, {
      new: true,
    });
    if (!updatedOverTime) {
      res.status(404).json({ error: 'OverTime is not found.' });
    } else {
      res.json(updatedOverTime);
    }
  } catch (error) {
    console.error('Error updating OverTime:', error.message);
    next(error);
  }
};

// Delete User by ID
exports.deleteOverTime = async (req, res, next) => {
  const { id } = req.params;
  try {
    const deletedOverTime = await OverTime.findByIdAndDelete(id);
    if (!deletedOverTime) {
      res.status(404).json({ error: 'OverTime not found.' });
    } else {
      res.json({ message: 'OverTime deleted successfully.' });
    }
  } catch (error) {
    console.error('Error deleting OverTime:', error.message);
    next(error);
  }
};