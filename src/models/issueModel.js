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
  },
  items: {
    type: []
  },
  inventory: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Inventory',
  },
  customer: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Customer',
  },
  storeManager: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
  },
  finance: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
  },  
  stockKeeper: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
  },
  generalManager: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
  },
  issuedBy: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
  },
});
const Issue=mongoose.model("Issue",IssueSchema)
module.exports = Issue;
