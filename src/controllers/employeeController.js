const Employee = require('../models/employeeModel');
const bcrypt = require('bcrypt');

exports.getAllEmployee = async (req, res, next) => {
  try {
    const employees = await Employee.find();
    res.json(employees);
  } catch (error) {
    console.error('Error getting employees:', error.message);
    next(error);
  }
};

exports.getEmployeeById = async (req, res, next) => {
  const { id } = req.params;
  try {
    const employee = await Employee.findById(id);
    if (!employee) {
      res.status(404).json({ error: 'Employee not found.' });
    } else {
      res.json(employee);
    }
  } catch (error) {
    console.error('Error getting employee by ID:', error.message);
    next(error);
  }
};
exports.createEmployee = async (req, res, next) => {
  try {
    // Hash the password before storing it in the database
    const hashedPassword = await bcrypt.hash(req.body.password, 10);
    const newEmployee = new Employee({ ...req.body,password: hashedPassword});
    const savedEmployee = await newEmployee.save();
    res.status(201).json(savedEmployee);
  } catch (error) {
    console.error('Error creating employee:', error.message);
    next(error);
  }};


exports.updateEmployee = async (req, res, next) => {
  const { id } = req.params;
  try {
    // Hash the password before storing it in the database
    const hashedPassword = await bcrypt.hash(req.body.password, 10);
    const newEmployee = new Employee({ ...req.body,password: hashedPassword});
    const updatedEmployee = await Employee.findByIdAndUpdate(id, newEmployee, {
      new: true,
    });
    if (!updatedEmployee) {
      res.status(404).json({ error: 'Employee is not found.' });
    } else {
      res.json(updatedEmployee);
    }
  } catch (error) {
    console.error('Error updating employee:', error.message);
    next(error);
  }
};

// Delete User by ID
exports.deleteEmployee = async (req, res, next) => {
  const { id } = req.params;
  try {
    const deletedEmployee = await Employee.findByIdAndDelete(id);
    if (!deletedEmployee) {
      res.status(404).json({ error: 'Employee not found.' });
    } else {
      res.json({ message: 'Employee deleted successfully.' });
    }
  } catch (error) {
    console.error('Error deleting employee:', error.message);
    next(error);
  }
};