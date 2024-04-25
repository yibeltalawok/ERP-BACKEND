// models/busAssignationModel.js

const mongoose = require('mongoose');

const TaxSlabSchema = mongoose.Schema( {
    initial: {
      type: Number
    },
    end: {
      type: Number
    },
    deduction: {
      type: Number
    },
    extraDeduction: {
      type: Number
    }
});

// Define associations
const TaxSlab=mongoose("TaxSlab",TaxSlabSchema)
module.exports = TaxSlab;
