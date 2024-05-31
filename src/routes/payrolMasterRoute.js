// routes/servicePaymentRoutes.js
const express = require('express');
const router = express.Router();
const PayrolMasterController = require('../controllers/payrolMasterController');

router.get('/payrols', PayrolMasterController.getAllPayrolMaster);
router.get('/payrols/:id', PayrolMasterController.getPayrolMasterById);
router.post('/payrols', PayrolMasterController.createPayrolMaster);
router.put('/payrols/:id', PayrolMasterController.updatePayrolMaster);
router.delete('/payrols/:id', PayrolMasterController.deletePayrolMaster);
router.get('/emp-payrol', PayrolMasterController.getFinanceReport)
router.get('/summarysheet', PayrolMasterController.summarySheet)

module.exports = router;
