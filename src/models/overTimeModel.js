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
  },
  payrol: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'PayrolMaster',
  },});
const OverTime=mongoose.model("OverTime",OverTimeSchema)
module.exports = OverTime;
