// routes/emergencyContactRoutes.js
const express = require('express');
const router = express.Router();
const PurchasedController = require('../controllers/purchasedController');
router.get('/purchased', PurchasedController.getAllPurchased);
router.get('/purchased/:id', PurchasedController.getPurchasedById);
router.post('/purchased', PurchasedController.createPurchased);
router.put('/purchased/:id', PurchasedController.updatePurchased);
router.delete('/purchased/:id', PurchasedController.deletePurchased);

module.exports = router;
