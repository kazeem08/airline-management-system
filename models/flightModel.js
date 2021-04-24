const mongoose = require("mongoose");

let schema = mongoose.schema(
  {
    airCraftId: {
      type: mongoose.Schema.Types.ObjectId,
      required: true,
      ref: "aircrafts",
    },
    departureAirportId: {
      type: mongoose.Schema.Types.ObjectId,
      required: true,
      ref: "airports",
    },
    arrivalAirportId: {
      type: mongoose.Schema.Types.ObjectId,
      required: true,
      ref: "airports",
    },
    name: { type: String, required: true },
    arrivalTime: { type: Number, required: true },
    departureTime: { type: Number, required: true },
    arrivalCity: { type: String, required: true },
    departureCity: { type: String, required: true },
    noOfSeats: { type: Number, required: true },
    isAvailable: { type: Boolean, required: true },
    flightStatus: { type: String},
    statusReason: { type: String }
  },
  {
    timestamps: true,
  }
);

const flightModel = mongoose.model("flights", schema);

module.exports = flightModel;
