const mongoose  = require('mongoose');
const CostSummerySchema = mongoose.Schema({
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  date: {
    type: date
  },
   workingDays: {
   type: String,
    default: "0"
  },
  minutesPerDay: {
    type: String,
    default: "0"
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
  directCost: {
    type: String,
    default: "0"
  },
  indirectCost: {
  type: String,
  default: "0"
  },
  costPerMonth: {
    type: String,
    default: "0"
  },
  costPerDay: {
  type: String,
  default: "0"
  },
  costPerMinute: {
    type: String,
    default: "0"
  }
});
// Define associations
// DriverServicePayment.belongsTo(Station, { foreignKey: 'stationId' });
// DriverServicePayment.belongsTo(Assocation, { foreignKey: 'assocationId' });
const CostSummery =mongoose("CostSummery",CostSummerySchema)

module.exports = CostSummery;
