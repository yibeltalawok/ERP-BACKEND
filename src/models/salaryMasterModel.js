// models/communicationModel.js
const mongoose = require('mongoose');

const SalaryMasterSchema = mongoose.Schema({
  responseAllow: {
    type: String,
    default: "0"
  },
  homeAllow: {
    type: String,
    default: "0"
  },
  absentIncentive: {
    type: String,
    default: "0"
  },
    transportPay: {
    type: String,
    default: "0"
  },
  costSharing: {
    type: String,
    default: "0"
  },
  ironIncentive: {
    type: String,
    default: 0
  },
  labourContribution: {
    type: String,
    default: "0"
  },
  fPrId: {
    type: String,
    default: "0"
  }
});
const SalaryMaster =mongoose("SalaryMaster",SalaryMasterSchema)
module.exports = SalaryMaster;
