// models/ticketModel.js

const mongoose = require('mongoose');
const ProductSchema = mongoose.Schema({
  productCode: {
    type: String
  },
  productName: {
    type: String
  },
 unitofMeasure: {
    type: String
  },
  stock: {
    type: String
  },
  brand: {
    type: String
  },
  description: {
    type: String
  },
  warantyperiod: {
    type: String
  },
  expirable: {
    type: String
  },
  expiredate: {
    type: String
  },
  minimumOrderQt: {
    type: String
  },
  safetyStock: {
    type: String
  },
  weightPerUnit: {
    type: String
  },
  standardSellingRate: {
    type: String
  },
  photo: {
    type: String,
    default: "noimage"
  },
});

const Product=mongoose.model("Product",ProductSchema)
module.exports = Product;
