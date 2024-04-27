// routes/TerminalRoutes.js
const express = require('express');
const router = express.Router();
const SupplierController = require('../controllers/supplierController');

router.post('/suppliers', SupplierController.createSupplier);
router.get('/suppliers', SupplierController.getAllSupplier);
router.get('/suppliers/:id', SupplierController.getSupplierById);
router.put('/suppliers/:id', SupplierController.updateSupplier);
router.delete('/suppliers/:id', SupplierController.deleteSupplier);

module.exports = router;
