// models/emergencyContactModel.js
const mongoose = require('mongoose');

const PurchasedSchema = mongoose.Schema( {
  purchaseDate: {
    type: String
  },
  approvedBy: {
    type: String
  },
  type: {
    type:String
  },
  totalQuantity: {
    type: Number
  },
  location: {
    type: String
  },
  code: {
    type: String
  },
  sivnumber: {
    type: Number
  },
  gmnumber: {
    type: Number
  },
  description: {
    type: String
  },
  state: {
    type: String
  },
  itemname: {
    type: String
  },
  addition: {
    type: String
  }
});
const Purchased=mongoose.model("Purchased",PurchasedSchema)
module.exports = Purchased;
