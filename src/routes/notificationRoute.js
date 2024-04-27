// routes/penaltyCategoryRoutes.js
const express = require('express');
const router = express.Router();
const NotificationController = require('../controllers/notificationController');

router.get('/notifications', NotificationController.getNotificationById);
router.post('/notifications', NotificationController.createNotification);
router.get('/notifications/:id', NotificationController.getNotificationById);
router.put('/notifications/:id', NotificationController.updateNotification);
router.delete('/notifications/:id', NotificationController.deleteNotification);

module.exports = router;
