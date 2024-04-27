const mongoose = require('mongoose');


const IssueSchema = mongoose.Schema( {
  issueCode: {
    type: String
  },
  type: {
    type:String
  },
  state: {
    type: String
  },
  state1: {
    type: String
  },
  state2: {
    type: String
  },
  state3: {
    type: String
  },
  reason: {
    type: String
  },
  issueDate: {
    type: Date
  },
  storeManaDate: {
    type: Date,
    default: null
  },
  financeDate: {
    type: Date,
    default: null
  },
  generalManadate: {
    type: Date,
    default: null
  },
  storeDate: {
    type: Date,
    default: null
  },
  items: {
    type: []
  },
  storeManagerSignature: {
    type: String
  },
  financeSignature: {
    type: String
  },
  generalManagerSignature: {
    type: String
  },
  storeSignature: {
    type: String
  },
  issueSignature: {
    type: String
  }
});
const Issue=mongoose.model("Issue",IssueSchema)
module.exports = Issue;
