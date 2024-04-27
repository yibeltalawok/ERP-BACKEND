const User = require('../models/usersModel');
const bcrypt = require('bcrypt');

// Create User
exports.createUser = async (req, res, next) => {
  try {
    // Hash the password before storing it in the database
    const hashedPassword = await bcrypt.hash(req.body.password, 10);
    const newUser = new User({ ...req.body, password: hashedPassword });
    const savedUser = await newUser.save();
    res.status(201).json(savedUser);
  } catch (error) {
    console.error('Error creating user:', error.message);
    next(error);
  }};

// Get all Users
exports.getAllUsers = async (req, res, next) => {
  try {
    const users = await User.find();
    res.json(users);
  } catch (error) {
    console.error('Error getting users:', error.message);
    next(error);
  }
};

// Get User by ID
exports.getUserById = async (req, res, next) => {
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
exports.updateUser = async (req, res, next) => {
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
    console.error('Error updating user:', error.message);
    next(error);
  }
};

// Delete User by ID
exports.deleteUser = async (req, res, next) => {
  const { id } = req.params;
  try {
    const deletedUser = await User.findByIdAndDelete(id);
    if (!deletedUser) {
      res.status(404).json({ error: 'User not found.' });
    } else {
      res.json({ message: 'User deleted successfully.' });
    }
  } catch (error) {
    console.error('Error deleting user:', error.message);
    next(error);
  }
};