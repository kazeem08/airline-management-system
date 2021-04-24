const mongoose = require('mongoose');

let schema = mongoose.schema({
  flightId: { type: mongoose.Schema.Types.ObjectId, required: true, ref: 'flights'},
  employeeId: { type: mongoose.Schema.Types.ObjectId, required: true, ref: 'employees'},
 
}, {
  timestamps: true
})

const crewModel = mongoose.model('crews', schema);

module.exports = crewModel;