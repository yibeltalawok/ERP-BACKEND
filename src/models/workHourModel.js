const mongoose = require('mongoose');
const WorkHourSchema = new mongoose.Schema({
day: {
    type: String
  },
  desc: {
    type: String
  },
  from: {
    type: String
  },
  to: {
    type: String
  }
})
const WorkHour = mongoose.model('WorkHour', WorkHourSchema);
module.exports = WorkHour;