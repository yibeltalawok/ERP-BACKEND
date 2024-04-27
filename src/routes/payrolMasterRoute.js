// routes/servicePaymentRoutes.js
const express = require('express');
const router = express.Router();
const PayrolMasterController = require('../controllers/payrolMasterController');

router.get('/payrolMaster', PayrolMasterController.getAllPayrolMaster);
router.get('/payrolMaster/:id', PayrolMasterController.getPayrolMasterById);
router.post('/payrolMaster', PayrolMasterController.createPayrolMaster);
router.put('/payrolMaster/:id', PayrolMasterController.updatePayrolMaster);
router.delete('/payrolMaster/:id', PayrolMasterController.deletePayrolMaster);

module.exports = router;
