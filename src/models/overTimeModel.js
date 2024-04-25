// models/stationModel.js
const mongoose = require('mongoose');

const OverTimeSchema = mongoose.Schema({

  date: {
    type: Date
  },
  type: {
    type: String
  },
  value: {
    type: String,
    default: "0"
  }
});

const OverTime=mongoose("OverTime",OverTimeSchema)
module.exports = OverTime;
