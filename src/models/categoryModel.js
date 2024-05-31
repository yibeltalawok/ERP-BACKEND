const mongoose = require('mongoose');

const CategorySchema = new mongoose.Schema({

  categoryName: {
    type: String
  },
  createdBy: {
    type: String
  },
  date: {
    type: String
  },
  purchased: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Purchased',
    required: true
  }
  // Add other fields as needed
});

// Define associations
// Accident.belongsTo(Bus, { foreignKey: 'busId' });
// Accident.belongsTo(Driver, { foreignKey: 'driverId' });
const Category = mongoose.model('Category', CategorySchema);
module.exports = Category;
