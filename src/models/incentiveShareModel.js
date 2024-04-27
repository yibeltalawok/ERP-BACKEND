const mongoose= require('mongoose');

const IncentiveShareSchema = mongoose.Schema({

  day: {
    type:String
  },
  month: {
    type: String
  },
  year: {
    type: String
  },
  forCompany: {
    type: String,
    default: ""
  },
  forEmployee: {
    type: String,
    default: ""
  },
  forLine: {
    type: String,
    default: ""
  },
  forOperator: {
    type: String,
    default: ""
  },

});

// Define associations
const IncentiveShare=mongoose.model("IncentiveShare",IncentiveShareSchema)

module.exports = IncentiveShare;
