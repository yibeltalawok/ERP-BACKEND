const IncentiveSlab = require('../models/incentiveSlabModel');
exports.getAllIncentiveSlab = async (req, res, next) => {
  try {
    const allIncentiveSlab = await IncentiveSlab.find();
    res.json(allIncentiveSlab);
  } catch (error) {
    console.error('Error getting IncentiveSlab:', error.message);
    next(error);
  }
};

exports.getIncentiveSlabById = async (req, res, next) => {
  const { id } = req.params;
  try {
    const getIncentiveSlab = await IncentiveSlab.findById(id);
    if (!getIncentiveSlab) {
      res.status(404).json({ error: 'IncentiveSlab not found.' });
    } else {
      res.json(getIncentiveSlab);
    }
  } catch (error) {
    console.error('Error getting IncentiveSlab by ID:', error.message);
    next(error);
  }
};
exports.createIncentiveSlab = async (req, res, next) => {
  try {
    console.log(req.body)
    // Hash the password before storing it in the database
    const newIncentiveSlab = new IncentiveSlab({ ...req.body});
    const savedIncentiveSlab = await newIncentiveSlab.save();
    res.status(201).json(savedIncentiveSlab);
  } catch (error) {
    console.error('Error creating IncentiveSlab:', error.message);
    next(error);
  }};


exports.updateIncentiveSlab = async (req, res, next) => {
  const { id } = req.params;
  try {
    const updatedIncentiveSlab = await IncentiveSlab.findByIdAndUpdate(id, req.body, {
      new: true,
    });
    if (!updatedIncentiveSlab) {
      res.status(404).json({ error: 'IncentiveSlab is not found.' });
    } else {
      res.json(updatedIncentiveSlab);
    }
  } catch (error) {
    console.error('Error updating IncentiveSlab:', error.message);
    next(error);
  }
};

// Delete User by ID
exports.deleteIncentiveSlab = async (req, res, next) => {
  const { id } = req.params;
  try {
    const deletedIncentiveSlab = await IncentiveSlab.findByIdAndDelete(id);
    if (!deletedIncentiveSlab) {
      res.status(404).json({ error: 'IncentiveSlab not found.' });
    } else {
      res.json({ message: 'IncentiveSlab deleted successfully.' });
    }
  } catch (error) {
    console.error('Error deleting IncentiveSlab:', error.message);
    next(error);
  }
};