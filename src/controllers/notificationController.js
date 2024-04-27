const Notification = require('../models/notificationModel');

exports.getAllNotification = async (req, res, next) => {
  try {
    const allNotifications = await Notification.find();
    res.json(allNotifications);
  } catch (error) {
    console.error('Error getting Notifications:', error.message);
    next(error);
  }
};

exports.getNotificationById = async (req, res, next) => {
  const { id } = req.params;
  try {
    const getNotification = await Notification.findById(id);
    if (!getNotification) {
      res.status(404).json({ error: 'Notification not found.' });
    } else {
      res.json(getNotification);
    }
  } catch (error) {
    console.error('Error getting Notification by ID:', error.message);
    next(error);
  }
};
exports.createNotification = async (req, res, next) => {
  try {
    console.log(req.body)
    // Hash the password before storing it in the database
    const newNotification = new Notification({ ...req.body});
    const savedNotification = await newNotification.save();
    res.status(201).json(savedNotification);
  } catch (error) {
    console.error('Error creating Notification:', error.message);
    next(error);
  }};


exports.updateNotification = async (req, res, next) => {
  const { id } = req.params;
  try {
    const updatedNotification = await Notification.findByIdAndUpdate(id, req.body, {
      new: true,
    });
    if (!updatedNotification) {
      res.status(404).json({ error: 'Notification is not found.' });
    } else {
      res.json(updatedNotification);
    }
  } catch (error) {
    console.error('Error updating Notification:', error.message);
    next(error);
  }
};

// Delete User by ID
exports.deleteNotification = async (req, res, next) => {
  const { id } = req.params;
  try {
    const deletedNotification = await Notification.findByIdAndDelete(id);
    if (!deletedNotification) {
      res.status(404).json({ error: 'Notification not found.' });
    } else {
      res.json({ message: 'Notification deleted successfully.' });
    }
  } catch (error) {
    console.error('Error deleting Notification:', error.message);
    next(error);
  }
};