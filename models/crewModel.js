const mongoose = require('mongoose');

let schema = mongoose.schema({
  flightId: { type: mongoose.Schema.Types.ObjectId, required: true, ref: 'flights'},
  employeeName: {type: String, required: true},
  jobTitle: {type: String, required: true },
  employeeId: {type: String, required: true},
  cityOfResidence: {type: String, required: true},
  isPilot: {type: Boolean, required: true },
}, {
  timestamps: true
})

const customerModel = mongoose.model('customers', schema);

module.exports = customerModel;