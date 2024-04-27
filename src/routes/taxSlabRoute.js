const express = require('express');
const router = express.Router();
const TaxSlabCntroller = require('../controllers/taxSlabController');

// Create a new driver booking
router.post('/taxSlab', TaxSlabCntroller.createTaxSlab);

// Get all driver taxSlab
router.get('/taxSlab', TaxSlabCntroller.getAllTaxSlab);

// Get driver booking by ID
router.get('/taxSlab/:id', TaxSlabCntroller.getTaxSlabById);

// Update driver booking by ID
router.put('/taxSlab/:id', TaxSlabCntroller.updateTaxSlab);

// Delete driver booking by ID
router.delete('/taxSlab/:id', TaxSlabCntroller.deleteTaxSlab);

module.exports = router;
