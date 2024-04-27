
const mongoose = require('mongoose');

const IncentiveSummarySchema = mongoose.Schema({

    month: {
      type: String
    },
    year: {
    type: String
    },
    line: {
    type: String
    },
    ttlMinEarned: {
      type: String
    },
    ttlEarning: {
      type: String
    },
    fullName: {
    type: String
    },
    idno: {
    type: string
    },
    performance: {
      type: String
    },
    discipline: {
      type: String
    },
    quality: {
    type: String
    },
    cummulative: {
      type: String
    },
    individual: {
      type: String
    },
    group: {
    type: String
    },
    total: {
      type: Number
    }
});

// Define associations
const IncentiveSummary=mongoose.model('IncentiveSummary', IncentiveSummarySchema);

module.exports = IncentiveSummary;
