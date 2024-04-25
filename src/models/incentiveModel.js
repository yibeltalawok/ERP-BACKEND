const mongoose= require('mongoose');

const IncentiveSchema = mongoose.Schema({

  day: {
    type:String
  },
  month: {
    type: String
  },
  year: {
    type: String
  },
  totalPerformance: {
    type: String,
    default: "0"
  },
  productionDate: {
    type: date
  },
  targetPerDay: {
    type: String
  },
  extraPerDay: {
    type: String
  },
  directCost: {
    type: String,
    default: ""
  },
  indirectCost: {
    type: String,
    default: ""
  },
  costPerMinute: {
    type: String,
    default: ""
  },
  extraPieceMinute: {
    type: String,
    default: ""
  },
 extraPieceCost: {
    type: String,
    default: ""
  },
  lineNo: {
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
  operator: {
    "type": String,
    default: "0"
  }
});

// Define associations
const Incentive=mongoose("Incentive",IncentiveSchema)

module.exports = Incentive;