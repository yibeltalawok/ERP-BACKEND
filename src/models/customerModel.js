
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
    type: [Number]
  },
  phoneNumber: {
    type: String,
    default: "noimage"
  },
  imagePath: {
    type: String,
    default: "noimage"
  }
});
const Customer=mongoose.model("Customer",CusomerSchema)
module.exports = Customer;
