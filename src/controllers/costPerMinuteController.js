const CostPerMinute = require('../models/costPerMinuteModel');
exports.getAllCostPerMinute = async (req, res, next) => {
  try {
    const allCostPerMinutes = await CostPerMinute.find();
    res.json(allCostPerMinutes);
  } catch (error) {
    console.error('Error getting CostPerMinutes:', error.message);
    next(error);
  }
};

exports.getCostPerMinuteById = async (req, res, next) => {
  const { id } = req.params;
  try {
    const getCostPerMinute = await CostPerMinute.findById(id);
    if (!getCostPerMinute) {
      res.status(404).json({ error: 'CostPerMinute not found.' });
    } else {
      res.json(getCostPerMinute);
    }
  } catch (error) {
    console.error('Error getting CostPerMinute by ID:', error.message);
    next(error);
  }
};
exports.createCostPerMinute = async (req, res, next) => {
  try {
    console.log(req.body)
    // Hash the password before storing it in the database
    const newCostPerMinute = new CostPerMinute({ ...req.body});
    const savedCostPerMinute = await newCostPerMinute.save();
    res.status(201).json(savedCostPerMinute);
  } catch (error) {
    console.error('Error creating CostPerMinute:', error.message);
    next(error);
  }};


exports.updateCostPerMinute = async (req, res, next) => {
  const { id } = req.params;
  try {
    const updatedCostPerMinute = await CostPerMinute.findByIdAndUpdate(id, req.body, {
      new: true,
    });
    if (!updatedCostPerMinute) {
      res.status(404).json({ error: 'CostPerMinute is not found.' });
    } else {
      res.json(updatedCostPerMinute);
    }
  } catch (error) {
    console.error('Error updating CostPerMinute:', error.message);
    next(error);
  }
};

// Delete User by ID
exports.deleteCostPerMinute = async (req, res, next) => {
  const { id } = req.params;
  try {
    const deletedCostPerMinute = await CostPerMinute.findByIdAndDelete(id);
    if (!deletedCostPerMinute) {
      res.status(404).json({ error: 'CostPerMinute not found.' });
    } else {
      res.json({ message: 'CostPerMinute deleted successfully.' });
    }
  } catch (error) {
    console.error('Error deleting CostPerMinute:', error.message);
    next(error);
  }
};