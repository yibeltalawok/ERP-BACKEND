const IncentiveShare = require('../models/incentiveShareModel');
exports.getAllIncentiveShare = async (req, res, next) => {
  try {
    const allIncentiveShare = await IncentiveShare.find();
    res.json(allIncentiveShare);
  } catch (error) {
    console.error('Error getting IncentiveShare:', error.message);
    next(error);
  }
};

exports.getIncentiveShareById = async (req, res, next) => {
  const { id } = req.params;
  try {
    const getIncentiveShare = await IncentiveShare.findById(id);
    if (!getIncentiveShare) {
      res.status(404).json({ error: 'IncentiveShare not found.' });
    } else {
      res.json(getIncentiveShare);
    }
  } catch (error) {
    console.error('Error getting IncentiveShare by ID:', error.message);
    next(error);
  }
};
exports.createIncentiveShare = async (req, res, next) => {
  try {
    console.log(req.body)
    // Hash the password before storing it in the database
    const newIncentiveShare = new IncentiveShare({ ...req.body});
    const savedIncentiveShare = await newIncentiveShare.save();
    res.status(201).json(savedIncentiveShare);
  } catch (error) {
    console.error('Error creating IncentiveShare:', error.message);
    next(error);
  }};


exports.updateIncentiveShare = async (req, res, next) => {
  const { id } = req.params;
  try {
    const updatedIncentiveShare = await IncentiveShare.findByIdAndUpdate(id, req.body, {
      new: true,
    });
    if (!updatedIncentiveShare) {
      res.status(404).json({ error: 'IncentiveShare is not found.' });
    } else {
      res.json(updatedIncentiveShare);
    }
  } catch (error) {
    console.error('Error updating IncentiveShare:', error.message);
    next(error);
  }
};

// Delete User by ID
exports.deleteIncentiveShare = async (req, res, next) => {
  const { id } = req.params;
  try {
    const deletedIncentiveShare = await IncentiveShare.findByIdAndDelete(id);
    if (!deletedIncentiveShare) {
      res.status(404).json({ error: 'IncentiveShare not found.' });
    } else {
      res.json({ message: 'IncentiveShare deleted successfully.' });
    }
  } catch (error) {
    console.error('Error deleting IncentiveShare:', error.message);
    next(error);
  }
};