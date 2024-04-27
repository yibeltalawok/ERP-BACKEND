const mongoose= require('mongoose');

const IncentiveSlabSchema = mongoose.Schema({

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
const IncentiveSlab=mongoose.model("IncentiveSlab",IncentiveSlabSchema)
module.exports = IncentiveSlab;
