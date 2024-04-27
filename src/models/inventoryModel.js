// models/maintenanceModel.js

const mongoose = require('mongoose'); // Import the Bus model

const InventorySchema =mongoose.Schema({

  inventoryName: {
    type: String
  },
  stock: {
    type: String
  },
  description: {
    type: String
  },
  date: {
    type: String
  },
  imagePath: {
    type: String,
    default: "inventory default image"
  },
  sellable: {
    type: Boolean
  },
  obsolete: {
    type: Boolean,
    default: false
  },
  neverDiminshing: {
    type: Boolean,
    default: false
  },
  component: {
    type: Boolean,
    default: false
  },
  expirable: {
    type: Boolean,
    default: false
  },
  assempledProduct: {
    type: Boolean,
    default: false
  }
});

// Define association with Bus
const Inventory= mongoose.model('InventorySchema',InventorySchema);

module.exports = Inventory;
