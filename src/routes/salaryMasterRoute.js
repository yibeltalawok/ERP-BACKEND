const express = require('express');
const router = express.Router();
const SalaryMasterController = require('../controllers/salaryMasterController');

// Validate BusOwner data
validateBusOwner = (req, res, next) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array() });
  }
  next();
};
// Create a new BusOwner
router.post('/salaryMaster', SalaryMasterController.createSalaryMaster);

// Get all BusOwners
router.get('/salaryMaster', SalaryMasterController.getAllSalaryMaster);

// Get BusOwner by ID
router.get('/salaryMaster/:id', SalaryMasterController.getSalaryMasterById);

// Update BusOwner by ID
router.put('/salaryMaster/:id', validateBusOwner, SalaryMasterController.updateSalaryMaster);

// Delete BusOwner by ID
router.delete('/salaryMaster/:id', SalaryMasterController.deleteSalaryMaster);

module.exports = router;
