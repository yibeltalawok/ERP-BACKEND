const mongoose = require('mongoose');
const costPerMinSchema = mongoose.Schema({
    date: {
      type: String
    },
    costPerMonth: {
      type: Number
    },
    costPerDay: {
      type: Number
    },
    costPerHour: {
      type: Number
    },
    costPerMinute: {
      type: Number
    },
    workingDays: {
      type: Number
    },
    workingHours: {
      type: Number
    },
    minutesPerDay: {
      type: Number
    }
});

// Define associations
const costPerMinute = mongoose.model('costPerMinute', costPerMinSchema);
module.exports = costPerMinute;
