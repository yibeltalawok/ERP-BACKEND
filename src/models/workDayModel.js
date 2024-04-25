
const mongoose = require('mongoose');

const WorkDaySchema = new mongoose.Schema({
day: {
    type: Date
  },
  month: {
    type: String
  },
  noDays: {
    type: String,
    default: "30"
  }
 })
const WorkDay = mongoose.model('WorkDay', WorkDaySchema);

module.exports = WorkDay;