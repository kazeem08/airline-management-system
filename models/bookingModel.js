const mongoose = require('mongoose');

let schema = mongoose.schema({
  customerName: {type: String, required: true},
  flightId: { type: mongoose.Schema.Types.ObjectId, required: true, ref: 'flights'},
  price: {type: String, required: true },
  isReturnTicket: { type: Boolean, required: true },
  email: {type: String, required: true },
  address: {type: String, required: true },
  phoneNumber: {type: String, required: true },
}, {
  timestamps: true
})

const bookingModel = mongoose.model('bookings', schema);

module.exports = bookingModel;