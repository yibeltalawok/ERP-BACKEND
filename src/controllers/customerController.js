const Customer = require('../models/customerModel');
exports.getAllCustomer = async (req, res, next) => {
  try {
    const allCustomer = await Customer.find();
    res.json(allCustomer);
  } catch (error) {
    console.error('Error getting Customer:', error.message);
    next(error);
  }
};

exports.getCustomerById = async (req, res, next) => {
  const { id } = req.params;
  try {
    const getCustomer = await Customer.findById(id);
    if (!getCustomer) {
      res.status(404).json({ error: 'Customer not found.' });
    } else {
      res.json(getCustomer);
    }
  } catch (error) {
    console.error('Error getting Customer by ID:', error.message);
    next(error);
  }
};
exports.createCustomer = async (req, res, next) => {
  try {
    console.log(req.body)
    // Hash the password before storing it in the database
    const newCustomer = new Customer({ ...req.body});
    const savedCustomer = await newCustomer.save();
    res.status(201).json(savedCustomer);
  } catch (error) {
    console.error('Error creating Customer:', error.message);
    next(error);
  }};


exports.updateCustomer = async (req, res, next) => {
  const { id } = req.params;
  try {
    const updatedCustomer = await Customer.findByIdAndUpdate(id, req.body, {
      new: true,
    });
    if (!updatedCustomer) {
      res.status(404).json({ error: 'Customer is not found.' });
    } else {
      res.json(updatedCustomer);
    }
  } catch (error) {
    console.error('Error updating Customer:', error.message);
    next(error);
  }
};

// Delete User by ID
exports.deleteCustomer = async (req, res, next) => {
  const { id } = req.params;
  try {
    const deletedCustomer = await Customer.findByIdAndDelete(id);
    if (!deletedCustomer) {
      res.status(404).json({ error: 'Customer not found.' });
    } else {
      res.json({ message: 'Customer deleted successfully.' });
    }
  } catch (error) {
    console.error('Error deleting Customer:', error.message);
    next(error);
  }
};