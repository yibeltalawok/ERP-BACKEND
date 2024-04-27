const SalaryMaster = require('../models/salaryMasterModel');

exports.getAllSalaryMaster = async (req, res, next) => {
  try {
    const allSalaryMasters = await SalaryMaster.find();
    res.json(allSalaryMasters);
  } catch (error) {
    console.error('Error getting SalaryMasters:', error.message);
    next(error);
  }
};

exports.getSalaryMasterById = async (req, res, next) => {
  const { id } = req.params;
  try {
    const getSalaryMaster = await SalaryMaster.findById(id);
    if (!getSalaryMaster) {
      res.status(404).json({ error: 'SalaryMaster not found.' });
    } else {
      res.json(getSalaryMaster);
    }
  } catch (error) {
    console.error('Error getting SalaryMaster by ID:', error.message);
    next(error);
  }
};
exports.createSalaryMaster = async (req, res, next) => {
  try {
    console.log(req.body)
    // Hash the password before storing it in the database
    const newSalaryMaster = new SalaryMaster({ ...req.body});
    const savedSalaryMaster = await newSalaryMaster.save();
    res.status(201).json(savedSalaryMaster);
  } catch (error) {
    console.error('Error creating SalaryMaster:', error.message);
    next(error);
  }};


exports.updateSalaryMaster = async (req, res, next) => {
  const { id } = req.params;
  try {
    const updatedSalaryMaster = await SalaryMaster.findByIdAndUpdate(id, req.body, {
      new: true,
    });
    if (!updatedSalaryMaster) {
      res.status(404).json({ error: 'SalaryMaster is not found.' });
    } else {
      res.json(updatedSalaryMaster);
    }
  } catch (error) {
    console.error('Error updating SalaryMaster:', error.message);
    next(error);
  }
};

// Delete User by ID
exports.deleteSalaryMaster = async (req, res, next) => {
  const { id } = req.params;
  try {
    const deletedSalaryMaster = await SalaryMaster.findByIdAndDelete(id);
    if (!deletedSalaryMaster) {
      res.status(404).json({ error: 'SalaryMaster not found.' });
    } else {
      res.json({ message: 'SalaryMaster deleted successfully.' });
    }
  } catch (error) {
    console.error('Error deleting SalaryMaster:', error.message);
    next(error);
  }
};