// models/RouteModel.js
const mongoose = require('mongoose');

const PayrolMasterSchema = mongoose.Schema({

  date: {
    type: String
  },
  remainingAl: {
    type: String,
    default: "0"
  },
  payback: {
    type: String,
    default: "0"
  },
  advancedRecievable: {
    type: String
  },
  penality: {
    type: String
  },
  miscPayment: {
    type: String,
    default: "0"
  }
});
//Define associations

const payrolMaster=mongoose("payrolMaster",PayrolMasterSchema)
module.exports = payrolMaster;