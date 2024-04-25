const User = require('../models/usersModel');
const bcrypt = require('bcrypt');

// Create User
exports.createEmployee = async (req, res, next) => {
  try {
    console.log(req.body)
    // Hash the password before storing it in the database
    const hashedPassword = await bcrypt.hash(req.body.password, 10);
    const newUser = new User({ ...req.body, password: hashedPassword });
    const savedUser = await newUser.save();
    res.status(201).json(savedUser);
  } catch (error) {
    console.error('Error creating User:', error.message);
    next(error);
  }};

// Get all Employees
exports.getAllEmployees = async (req, res, next) => {
  try {
    const users = await User.find();
    res.json(users);
  } catch (error) {
    console.error('Error getting Users:', error.message);
    next(error);
  }
};

// Get User by ID
exports.getEmployeeById = async (req, res, next) => {
  const { id } = req.params;
  try {
    const users = await User.findById(id);
    if (!users) {
      res.status(404).json({ error: 'Users not found.' });
    } else {
      res.json(users);
    }
  } catch (error) {
    console.error('Error getting users by ID:', error.message);
    next(error);
  }
};
// Update User by ID
exports.updateEmployee = async (req, res, next) => {
  const { id } = req.params;
  try {
    const updatedUser = await User.findByIdAndUpdate(id, req.body, {
      new: true,
    });
    if (!updatedUser) {
      res.status(404).json({ error: 'User is not found.' });
    } else {
      res.json(updatedUser);
    }
  } catch (error) {
    console.error('Error updating User:', error.message);
    next(error);
  }
};

// Delete User by ID
exports.deleteEmployee = async (req, res, next) => {
  const { id } = req.params;
  try {
    const deletedUser = await User.findByIdAndDelete(id);
    if (!deletedUser) {
      res.status(404).json({ error: 'User not found.' });
    } else {
      res.json({ message: 'User deleted successfully.' });
    }
  } catch (error) {
    console.error('Error deleting User:', error.message);
    next(error);
  }
};