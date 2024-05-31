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
    type: Date
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
  },
  employee: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Employee',
    required: true
  },
  sam: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Sam',
    required: true
  }
});

// Define associations
const Incentive=mongoose.model("Incentive",IncentiveSchema)

module.exports = Incentive;
