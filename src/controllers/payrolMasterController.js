const PayrolMaster = require('../models/PayrolMasterModel');

exports.getAllPayrolMaster = async (req, res, next) => {
  try {
    const allPayrolMasters = await PayrolMaster.find();
    res.json(allPayrolMasters);
  } catch (error) {
    console.error('Error getting PayrolMasters:', error.message);
    next(error);
  }
};

exports.getPayrolMasterById = async (req, res, next) => {
  const { id } = req.params;
  try {
    const getPayrolMaster = await PayrolMaster.findById(id);
    if (!getPayrolMaster) {
      res.status(404).json({ error: 'PayrolMaster not found.' });
    } else {
      res.json(getPayrolMaster);
    }
  } catch (error) {
    console.error('Error getting PayrolMaster by ID:', error.message);
    next(error);
  }
};
exports.createPayrolMaster = async (req, res, next) => {
  try {
    console.log(req.body)
    // Hash the password before storing it in the database
    const newPayrolMaster = new PayrolMaster({ ...req.body});
    const savedPayrolMaster = await newPayrolMaster.save();
    res.status(201).json(savedPayrolMaster);
  } catch (error) {
    console.error('Error creating PayrolMaster:', error.message);
    next(error);
  }};


exports.updatePayrolMaster = async (req, res, next) => {
  const { id } = req.params;
  try {
    const updatedPayrolMaster = await PayrolMaster.findByIdAndUpdate(id, req.body, {
      new: true,
    });
    if (!updatedPayrolMaster) {
      res.status(404).json({ error: 'PayrolMaster is not found.' });
    } else {
      res.json(updatedPayrolMaster);
    }
  } catch (error) {
    console.error('Error updating PayrolMaster:', error.message);
    next(error);
  }
};

// Delete User by ID
exports.deletePayrolMaster = async (req, res, next) => {
  const { id } = req.params;
  try {
    const deletedPayrolMaster = await PayrolMaster.findByIdAndDelete(id);
    if (!deletedPayrolMaster) {
      res.status(404).json({ error: 'PayrolMaster not found.' });
    } else {
      res.json({ message: 'PayrolMaster deleted successfully.' });
    }
  } catch (error) {
    console.error('Error deleting PayrolMaster:', error.message);
    next(error);
  }
};