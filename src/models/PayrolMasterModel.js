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
  },
  overTime: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'OverTime',
  },
  employee: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Employee',
    required: true
  }});
//Define associations
const payrolMaster=mongoose.model("payrolMaster",PayrolMasterSchema)
module.exports = payrolMaster;