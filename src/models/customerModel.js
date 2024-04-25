
const mongoose = require('mongoose'); 
const CusomerSchema = mongoose.Schema({
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
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
    type: string,
    default: "noimage"
  }
});
const Customer=mongoose("Customer",CusomerSchema)
module.exports = Customer;
