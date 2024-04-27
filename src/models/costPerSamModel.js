const mongoose = require('mongoose');
const costPerSamSchema = mongoose.Schema({

  date: {
    type: Date,
    require: true,
  },

  month: {
    type: String
  },
  mName: {
    type: String
  },
  year: {
    type: String
  },
  totalMinuteProduced: {
    type: String,
    require: true,
  },
  operationalCost: {
    type: String,
    default: "0"
  },
  costPerSam: {
    type: String,
    default: "0"
  }
});

// Define associations with explicitly specified foreign key names
const CostPerSam = mongoose.model('costPerSam', costPerSamSchema);

module.exports = CostPerSam;
