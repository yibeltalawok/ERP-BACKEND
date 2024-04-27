const IncentiveSummary = require('../models/incentiveSummaryModel');
exports.getAllIncentiveSummary = async (req, res, next) => {
  try {
    const allIncentiveSummary = await IncentiveSummary.find();
    res.json(allIncentiveSummary);
  } catch (error) {
    console.error('Error getting IncentiveSummary:', error.message);
    next(error);
  }
};

exports.getIncentiveSummaryById = async (req, res, next) => {
  const { id } = req.params;
  try {
    const getIncentiveSummary = await IncentiveSummary.findById(id);
    if (!getIncentiveSummary) {
      res.status(404).json({ error: 'IncentiveSummary not found.' });
    } else {
      res.json(getIncentiveSummary);
    }
  } catch (error) {
    console.error('Error getting IncentiveSummary by ID:', error.message);
    next(error);
  }
};
exports.createIncentiveSummary = async (req, res, next) => {
  try {
    console.log(req.body)
    // Hash the password before storing it in the database
    const newIncentiveSummary = new IncentiveSummary({ ...req.body});
    const savedIncentiveSummary = await newIncentiveSummary.save();
    res.status(201).json(savedIncentiveSummary);
  } catch (error) {
    console.error('Error creating IncentiveSummary:', error.message);
    next(error);
  }};


exports.updateIncentiveSummary = async (req, res, next) => {
  const { id } = req.params;
  try {
    const updatedIncentiveSummary = await IncentiveSummary.findByIdAndUpdate(id, req.body, {
      new: true,
    });
    if (!updatedIncentiveSummary) {
      res.status(404).json({ error: 'IncentiveSummary is not found.' });
    } else {
      res.json(updatedIncentiveSummary);
    }
  } catch (error) {
    console.error('Error updating IncentiveSummary:', error.message);
    next(error);
  }
};

// Delete User by ID
exports.deleteIncentiveSummary = async (req, res, next) => {
  const { id } = req.params;
  try {
    const deletedIncentiveSummary = await IncentiveSummary.findByIdAndDelete(id);
    if (!deletedIncentiveSummary) {
      res.status(404).json({ error: 'IncentiveSummary not found.' });
    } else {
      res.json({ message: 'IncentiveSummary deleted successfully.' });
    }
  } catch (error) {
    console.error('Error deleting IncentiveSummary:', error.message);
    next(error);
  }
};