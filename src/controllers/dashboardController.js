// dashboardController.js
const Product = require('../models/productModel');
const Supplier = require('../models/SupplierModel');
const Attendance = require('../models/attendanceModel');
const Inventory = require('../models/inventoryModel');
const Issue = require('../models/issueModel');
const Customer = require('../models/customerModel');
const Employee = require('../models/employeeModel');


exports.getDashboardStats = async (req, res, next) => {
  try {
   const employees=await Employee.find({})
   const attendances=await Attendance.find({})
   const products=await Product.find({})
   const suppliers=await Supplier.find({})
   const inventories=await Inventory.find({})
   const issues=await Issue.find({})
   const customers=await Customer.find({})
    const stats = {
      employee:employees.length,
      product: products.length,
      attendance: attendances.length,
      supplier: suppliers.length,
      inventory: inventories.length,
      issue: issues.length,
      customer: customers.length,
      // Add counts for other models here
    };

    res.json(stats);
  } catch (error) {
    next(error);
  }
};
