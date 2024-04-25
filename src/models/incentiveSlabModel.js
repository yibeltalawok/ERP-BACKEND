const mongoose= require('mongoose');

const IncentiveSlabSchema = mongoose.Schema({
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  from: {
    type: String,
    default: "0"
  },
  to: {
  type: String,
  default: "0"
  },
  percent: {
    type: String,
    default: "0"
  }

});

// Define associations
const IncentiveSlab=mongoose("IncentiveSlab",IncentiveSlabSchema)
module.exports = IncentiveSlab;
