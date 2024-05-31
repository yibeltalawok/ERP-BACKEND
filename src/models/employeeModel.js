const mongoose = require('mongoose');

const EmployeeSchema = new mongoose.Schema({

  incentiveSalary: {
    type: String,
  },
fullName: {
    type:String,
    required: true
  },
  position: {
    type: String
  },
  positionalAllow: {
    type: String,
    default: "0"
  },
  bankAccountNum: {
    type: String,
    require:true
  },
  mobileAllow: {
    type: Number,
    default: 0
  },
  foodAllow: {
    type: Number,
    default: 0
  },
  phoneNumber: {
    type: String,
    require:true
  },
  gender: {
    type: String,
    required: true
  },
  joiningDate: {
    type: String
  },
  department: {
    type: String,
    required: true
  },
  subDept: {
    type:String
  },
  salary: {
    type: String,
    required: true
  },
  totalSalary: {
    type: String,
    default: "0"
  },
  overtime: {
    type: String,
    default: "0"
  },
  address: {
    type: String
  },
  profilePicture: {
    type: String
  },
  idPicture: {
    type: String
  },
  email: {
    type: String
  },
  password: {
    type: String
  },
  role: {
    type: String,
    default: "admin"
  },
  prfrm: {
    type: String,
    default: "0"
  },
  discipline: {
    type: String,
    default: "0"
  },
  quality: {
    type: String,
    default: "0"
  },
  pay: {
    type: Boolean,
    default: false
  },
  responseAllow: {
    type: String,
    default: "0"
  },
  homeAllow: {
    type: String,
    default: "0"
  },
  taxableHomeAllow: {
    type: Number,
    default: 0
  },
  nonTaxableHomeAllow: {
    type: Number,
    default: 0
  },
  profAllow: {
    type: Number,
    default: 0
  },
  taxableProfAllow: {
    type: Number,
    default: 0
  },
  nonTaxableProfAllow: {
    type: Number,
    default: 0
  },
  absentIncentive: {
    type: String,
    default: "0"
  },
  transportPay: {
    type: String,
    default: "0"
  },
  costSharing: {
    type: String,
    default: "0"
  },
  ironIncentive: {
    type: String,
    default: "0"
  },
  labourContribution: {
    type: String,
    default: "0"
  },
  womanUnion: {
    type: String,
    default: "0"
  },
  creditAssociation: {
    type: String,
    default: "0"
  },
  medicationDeduction: {
    type: String,
    default: "0"
  },
  attendance: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Attendance',
  }
});
const Employee = mongoose.model('Employee', EmployeeSchema);

module.exports = Employee;
