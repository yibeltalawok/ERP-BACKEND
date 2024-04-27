const CostPerSam = require('../models/costPerSamModel');
exports.getAllCostPerSam = async (req, res, next) => {
  try {
    const allCostPerSams = await CostPerSam.find();
    res.json(allCostPerSams);
  } catch (error) {
    console.error('Error getting CostPerSams:', error.message);
    next(error);
  }
};

exports.getCostPerSamById = async (req, res, next) => {
  const { id } = req.params;
  try {
    const getCostPerSam = await CostPerSam.findById(id);
    if (!getCostPerSam) {
      res.status(404).json({ error: 'CostPerSam not found.' });
    } else {
      res.json(getCostPerSam);
    }
  } catch (error) {
    console.error('Error getting CostPerSam by ID:', error.message);
    next(error);
  }
};
exports.createCostPerSam = async (req, res, next) => {
  try {
    console.log(req.body)
    // Hash the password before storing it in the database
    const newCostPerSam = new CostPerSam({ ...req.body});
    const savedCostPerSam = await newCostPerSam.save();
    res.status(201).json(savedCostPerSam);
  } catch (error) {
    console.error('Error creating CostPerSam:', error.message);
    next(error);
  }};


exports.updateCostPerSam = async (req, res, next) => {
  const { id } = req.params;
  try {
    const updatedCostPerSam = await CostPerSam.findByIdAndUpdate(id, req.body, {
      new: true,
    });
    if (!updatedCostPerSam) {
      res.status(404).json({ error: 'CostPerSam is not found.' });
    } else {
      res.json(updatedCostPerSam);
    }
  } catch (error) {
    console.error('Error updating CostPerSam:', error.message);
    next(error);
  }
};

// Delete User by ID
exports.deleteCostPerSam = async (req, res, next) => {
  const { id } = req.params;
  try {
    const deletedCostPerSam = await CostPerSam.findByIdAndDelete(id);
    if (!deletedCostPerSam) {
      res.status(404).json({ error: 'CostPerSam not found.' });
    } else {
      res.json({ message: 'CostPerSam deleted successfully.' });
    }
  } catch (error) {
    console.error('Error deleting CostPerSam:', error.message);
    next(error);
  }
};