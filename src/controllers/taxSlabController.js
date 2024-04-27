const TaxSlab = require('../models/taxSlabModel');

exports.getAllTaxSlab = async (req, res, next) => {
  try {
    const allTaxSlabs = await TaxSlab.find();
    res.json(allTaxSlabs);
  } catch (error) {
    console.error('Error getting TaxSlabs:', error.message);
    next(error);
  }
};

exports.getTaxSlabById = async (req, res, next) => {
  const { id } = req.params;
  try {
    const getTaxSlab = await TaxSlab.findById(id);
    if (!getTaxSlab) {
      res.status(404).json({ error: 'TaxSlab not found.' });
    } else {
      res.json(getTaxSlab);
    }
  } catch (error) {
    console.error('Error getting TaxSlab by ID:', error.message);
    next(error);
  }
};
exports.createTaxSlab = async (req, res, next) => {
  try {
    console.log(req.body)
    // Hash the password before storing it in the database
    const newTaxSlab = new TaxSlab({ ...req.body});
    const savedTaxSlab = await newTaxSlab.save();
    res.status(201).json(savedTaxSlab);
  } catch (error) {
    console.error('Error creating TaxSlab:', error.message);
    next(error);
  }};


exports.updateTaxSlab = async (req, res, next) => {
  const { id } = req.params;
  try {
    const updatedTaxSlab = await TaxSlab.findByIdAndUpdate(id, req.body, {
      new: true,
    });
    if (!updatedTaxSlab) {
      res.status(404).json({ error: 'TaxSlab is not found.' });
    } else {
      res.json(updatedTaxSlab);
    }
  } catch (error) {
    console.error('Error updating TaxSlab:', error.message);
    next(error);
  }
};

// Delete User by ID
exports.deleteTaxSlab = async (req, res, next) => {
  const { id } = req.params;
  try {
    const deletedTaxSlab = await TaxSlab.findByIdAndDelete(id);
    if (!deletedTaxSlab) {
      res.status(404).json({ error: 'TaxSlab not found.' });
    } else {
      res.json({ message: 'TaxSlab deleted successfully.' });
    }
  } catch (error) {
    console.error('Error deleting TaxSlab:', error.message);
    next(error);
  }
};