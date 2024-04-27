const express = require('express');
const router = express.Router();
const SamController = require('../controllers/samController');

// CRUD routes for Station
router.post('/sam', SamController.createSam);
router.get('/sam', SamController.getAllSam);
router.get('/sam/:id', SamController.getSamById);
router.put('/sam/:id', SamController.updateSam);
router.delete('/sam/:id', SamController.deleteSam);

module.exports = router;
