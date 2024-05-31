
const mongoose = require('mongoose'); 
const CusomerSchema = mongoose.Schema({
  customerCode: {
    type: String
  },
  customerName: {
    type: String
  },
  country: {
    type: String
  },
  city: {
    type: String
  },
  state: {
    type: String
  },
  postalcode: {
    type: String
  },
  location: {
    type: String
  },
  phoneNumber: {
    type: String,
  },
  photo: {
    type: String,
    default: "noimage"
  },
  purchased: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Purchased',
  },
});
const Customer=mongoose.model("Customer",CusomerSchema)
module.exports = Customer;
