const Incentive = require('../models/incentiveModel');
exports.getAllIncentive = async (req, res, next) => {
  try {
    const allIncentive = await Incentive.find();
    res.json(allIncentive);
  } catch (error) {
    console.error('Error getting Incentive:', error.message);
    next(error);
  }
};

exports.getIncentiveById = async (req, res, next) => {
  const { id } = req.params;
  try {
    const getIncentive = await Incentive.findById(id);
    if (!getIncentive) {
      res.status(404).json({ error: 'Incentive not found.' });
    } else {
      res.json(getIncentive);
    }
  } catch (error) {
    console.error('Error getting Incentive by ID:', error.message);
    next(error);
  }
};
exports.createIncentive = async (req, res, next) => {
  try {
    console.log(req.body)
    // Hash the password before storing it in the database
    const newIncentive = new Incentive({ ...req.body});
    const savedIncentive = await newIncentive.save();
    res.status(201).json(savedIncentive);
  } catch (error) {
    console.error('Error creating Incentive:', error.message);
    next(error);
  }};


exports.updateIncentive = async (req, res, next) => {
  const { id } = req.params;
  try {
    const updatedIncentive = await Incentive.findByIdAndUpdate(id, req.body, {
      new: true,
    });
    if (!updatedIncentive) {
      res.status(404).json({ error: 'Incentive is not found.' });
    } else {
      res.json(updatedIncentive);
    }
  } catch (error) {
    console.error('Error updating Incentive:', error.message);
    next(error);
  }
};

// Delete User by ID
exports.deleteIncentive = async (req, res, next) => {
  const { id } = req.params;
  try {
    const deletedIncentive = await Incentive.findByIdAndDelete(id);
    if (!deletedIncentive) {
      res.status(404).json({ error: 'Incentive not found.' });
    } else {
      res.json({ message: 'Incentive deleted successfully.' });
    }
  } catch (error) {
    console.error('Error deleting Incentive:', error.message);
    next(error);
  }
};