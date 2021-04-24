const mongoose = require("mongoose");

let schema = mongoose.schema(
  {
    airCraftName: { type: String, required: true },
    capacity: { type: Number, required: true },
    manufacturer: { type: String, required: true },
    model: { type: String, required: true },
  },
  {
    timestamps: true,
  }
);

const airCraftModel = mongoose.model("aircrafts", schema);

module.exports = airCraftModel;
