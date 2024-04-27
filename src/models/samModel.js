const mongoose = require('mongoose'); // Corrected the spelling of the model name
const SamSchema = mongoose.Schema({
  samCode: {
    type:String
  },
  styleName: {
    type: String
  },
  styleNumber: {
    type:String
  },
  sam: {
    type: String
  }
});

const Sam=mongoose.model("Sam",SamSchema)
module.exports = Sam;
