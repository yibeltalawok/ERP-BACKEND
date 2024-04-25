const mongoose = require('mongoose');

const NotificationSchema = mongoose.Schema({
    date: {
        type: Date,
        required: true
      },
       status: {
        type: Boolean,
        required: true,
        default: false
      },
      title: {
        type: String,
        required: true
      },
      type: {
      type: String,
        required: true
      },
      route: {
        type: String,
        required: true
      },
      description: {
        type: String,
        required: true
      }
});
const Notification=mongoose("Notification",NotificationSchema)
module.exports = Notification;
