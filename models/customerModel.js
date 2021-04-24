const mongoose = require('mongoose');

let schema = mongoose.schema({
  name: {type: String, required: true},
  flightId: { type: mongoose.Schema.Types.ObjectId, required: true, ref: 'flights'}
}, {
  timestamps: true
})

const customerModel = mongoose.model('customers', schema);

module.exports = customerModel;