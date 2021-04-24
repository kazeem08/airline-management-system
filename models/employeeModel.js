const mongoose = require('mongoose');

let schema = mongoose.schema({
  employeeName: {type: String, required: true},
  isPilot: { type: Boolean, required: true },
  email: {type: String, required: true },
  address: {type: String, required: true },
  phoneNumber: {type: String, required: true },
  jobTitle: {type: String, required: true },
  cityOfResidence: {type: String, required: true},
}, {
  timestamps: true
})

const employeeModel = mongoose.model('employees', schema);

module.exports = employeeModel;