const mongoose = require('mongoose');
const costPerSamSchema = mongoose.Schema({

  date: {
    type: DataTypes.DATE,
    allowNull: false,
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
    type: DataTypes.STRING,
    allowNull: false,
  },
  operationalCost: {
    type: string,
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
