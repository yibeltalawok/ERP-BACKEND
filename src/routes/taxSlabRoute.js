const express = require('express');
const router = express.Router();
const TaxSlabCntroller = require('../controllers/taxSlabController');

// Create a new taxe
router.post('/taxes', TaxSlabCntroller.createTaxSlab);

// Get all taxe
router.get('/taxes', TaxSlabCntroller.getAllTaxSlab);

// Get taxe by ID
router.get('/taxes/:id', TaxSlabCntroller.getTaxSlabById);

// Update taxe by ID
router.put('/taxes/:id', TaxSlabCntroller.updateTaxSlab);

// Delete taxe by ID
router.delete('/taxes/:id', TaxSlabCntroller.deleteTaxSlab);
router.get('/payrollInfo/:id', TaxSlabCntroller.payrollInfo);

module.exports = router;
