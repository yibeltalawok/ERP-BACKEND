const mongoose = require('mongoose');


const ItemSchema = mongoose.Schema( {

  itemNumber: {
    type: String
  },
  binCardNumber: {
    type: String
  },
  invoiceNo: {
    type: String
  },
  itemName: {
    type: String
  },
  materialType: {
    type: String
  },
  totalQuantity: {
    type: String
  },
  available: {
    type: Number,
    default: 0
  },
  maxSize: {
    type: Number,
    default: 0
  },
  unitOfMeasure: {
    type: String
  },
  materialStatus: {
    type: String,
    default: "Available"
  },
  GRNno: {
    type: String
  },
  unitPrice: {
  type: String
  },
  description: {
    type: String
  },
  purchasedDate: {
    type: String
  },
  inHouseDate: {
    type: String
  },
  expiryDate: {
    type: String
  },
  color: {
    type: String
  },
  totalPrice: {
    type: String
  },
  poNo: {
    type: String
  },
  issueDept: {
    type: String
  }
});
const Items=mongoose.model("Items",ItemSchema)
module.exports = Items;
