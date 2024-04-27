const CostSummary = require('../models/costSummaryModel');
exports.getAllCostSummary = async (req, res, next) => {
  try {
    const allCostSummary = await CostSummary.find();
    res.json(allCostSummary);
  } catch (error) {
    console.error('Error getting CostSummary:', error.message);
    next(error);
  }
};

exports.getCostSummaryById = async (req, res, next) => {
  const { id } = req.params;
  try {
    const getCostSummary = await CostSummary.findById(id);
    if (!getCostSummary) {
      res.status(404).json({ error: 'CostSummary not found.' });
    } else {
      res.json(getCostSummary);
    }
  } catch (error) {
    console.error('Error getting CostSummary by ID:', error.message);
    next(error);
  }
};
exports.createCostSummary = async (req, res, next) => {
  try {
    console.log(req.body)
    // Hash the password before storing it in the database
    const newCostSummary = new CostSummary({ ...req.body});
    const savedCostSummary = await newCostSummary.save();
    res.status(201).json(savedCostSummary);
  } catch (error) {
    console.error('Error creating CostSummary:', error.message);
    next(error);
  }};


exports.updateCostSummary = async (req, res, next) => {
  const { id } = req.params;
  try {
    const updatedCostSummary = await CostSummary.findByIdAndUpdate(id, req.body, {
      new: true,
    });
    if (!updatedCostSummary) {
      res.status(404).json({ error: 'CostSummary is not found.' });
    } else {
      res.json(updatedCostSummary);
    }
  } catch (error) {
    console.error('Error updating CostSummary:', error.message);
    next(error);
  }
};

// Delete User by ID
exports.deleteCostSummary = async (req, res, next) => {
  const { id } = req.params;
  try {
    const deletedCostSummary = await CostSummary.findByIdAndDelete(id);
    if (!deletedCostSummary) {
      res.status(404).json({ error: 'CostSummary not found.' });
    } else {
      res.json({ message: 'CostSummary deleted successfully.' });
    }
  } catch (error) {
    console.error('Error deleting CostSummary:', error.message);
    next(error);
  }
};