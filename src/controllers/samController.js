const Sam = require('../models/samModel');

exports.getAllSam = async (req, res, next) => {
  try {
    const allSams = await Sam.find();
    res.json(allSams);
  } catch (error) {
    console.error('Error getting Sams:', error.message);
    next(error);
  }
};

exports.getSamById = async (req, res, next) => {
  const { id } = req.params;
  try {
    const getSam = await Sam.findById(id);
    if (!getSam) {
      res.status(404).json({ error: 'Sam not found.' });
    } else {
      res.json(getSam);
    }
  } catch (error) {
    console.error('Error getting Sam by ID:', error.message);
    next(error);
  }
};
exports.createSam = async (req, res, next) => {
  try {
    console.log(req.body)
    // Hash the password before storing it in the database
    const newSam = new Sam({ ...req.body});
    const savedSam = await newSam.save();
    res.status(201).json(savedSam);
  } catch (error) {
    console.error('Error creating Sam:', error.message);
    next(error);
  }};


exports.updateSam = async (req, res, next) => {
  const { id } = req.params;
  try {
    const updatedSam = await Sam.findByIdAndUpdate(id, req.body, {
      new: true,
    });
    if (!updatedSam) {
      res.status(404).json({ error: 'Sam is not found.' });
    } else {
      res.json(updatedSam);
    }
  } catch (error) {
    console.error('Error updating Sam:', error.message);
    next(error);
  }
};

// Delete User by ID
exports.deleteSam = async (req, res, next) => {
  const { id } = req.params;
  try {
    const deletedSam = await Sam.findByIdAndDelete(id);
    if (!deletedSam) {
      res.status(404).json({ error: 'Sam not found.' });
    } else {
      res.json({ message: 'Sam deleted successfully.' });
    }
  } catch (error) {
    console.error('Error deleting Sam:', error.message);
    next(error);
  }
};