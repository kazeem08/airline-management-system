const mongoose = require('mongoose');

let schema = mongoose.schema({
  customerName: {type: String, required: true},
  noOfTerminals: {type: Number, required: true },
  city: {type: String, required: true },
  state: {type: String, required: true },
  country: {type: String, required: true },
  weather: {type: String, required: true },
}, {
  timestamps: true
})

const airportModel = mongoose.model('airports', schema);

module.exports = airportModel;