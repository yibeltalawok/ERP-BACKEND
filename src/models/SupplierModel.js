// models/servicePaymentModel.js
const mongoose = require('mongoose');
const SupplierSchema = mongoose.Schema({
  supplierCode: {
    type: String
  },
  supplierName: {
    type: String
  },
  taxRate: {
    type: String
  },
  country: {
  type: String
  },
  city: {
    type: String
  },
  postalCode: {
    type: String
  },
  location: {
    type: [Number]
  },
  states: {
    type: string
  },
  phoneNumber: {
    type: String
  }
});

// Define associations
const Supplier=mongoose("Supplier",SupplierSchema)
module.exports = Supplier;
