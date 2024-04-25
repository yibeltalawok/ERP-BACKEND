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
  imagePath: {
    type: String,
    default: "noimage"
  }
});

// Define associations
// Ticket.belongsTo(Passenger);
// Ticket.belongsTo(Bus);
// Ticket.belongsTo(Route);
const Product=mongoose("Product",ProductSchema)
module.exports = Product;
