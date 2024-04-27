const Supplier = require('../models/SupplierModel');

exports.getAllSupplier = async (req, res, next) => {
  try {
    const allSuppliers = await Supplier.find();
    res.json(allSuppliers);
  } catch (error) {
    console.error('Error getting Suppliers:', error.message);
    next(error);
  }
};

exports.getSupplierById = async (req, res, next) => {
  const { id } = req.params;
  try {
    const getSupplier = await Supplier.findById(id);
    if (!getSupplier) {
      res.status(404).json({ error: 'Supplier not found.' });
    } else {
      res.json(getSupplier);
    }
  } catch (error) {
    console.error('Error getting Supplier by ID:', error.message);
    next(error);
  }
};
exports.createSupplier = async (req, res, next) => {
  try {
    console.log(req.body)
    // Hash the password before storing it in the database
    const newSupplier = new Supplier({ ...req.body});
    const savedSupplier = await newSupplier.save();
    res.status(201).json(savedSupplier);
  } catch (error) {
    console.error('Error creating Supplier:', error.message);
    next(error);
  }};


exports.updateSupplier = async (req, res, next) => {
  const { id } = req.params;
  try {
    const updatedSupplier = await Supplier.findByIdAndUpdate(id, req.body, {
      new: true,
    });
    if (!updatedSupplier) {
      res.status(404).json({ error: 'Supplier is not found.' });
    } else {
      res.json(updatedSupplier);
    }
  } catch (error) {
    console.error('Error updating Supplier:', error.message);
    next(error);
  }
};

// Delete User by ID
exports.deleteSupplier = async (req, res, next) => {
  const { id } = req.params;
  try {
    const deletedSupplier = await Supplier.findByIdAndDelete(id);
    if (!deletedSupplier) {
      res.status(404).json({ error: 'Supplier not found.' });
    } else {
      res.json({ message: 'Supplier deleted successfully.' });
    }
  } catch (error) {
    console.error('Error deleting Supplier:', error.message);
    next(error);
  }
};