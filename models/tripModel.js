const mongoose = require("mongoose");

const expenseSchema = new mongoose.Schema({
  category: {
    type: String,
    required: true,
  },
  amount: {
    type: Number,
    required: true,
  },
});

const tripSchema = new mongoose.Schema({
  tripName: {
    type: String,
    required: true,
  },
  sourceCountry: {
    type: String,
    required: true,
  },
  destinationCountry: {
    type: String,
    required: true,
  },
  startDate: {
    type: Date,
    required: true,
  },
  endDate: {
    type: Date,
    required: true,
  },
  userId: {
    type: String,
    required: true,
  },
  participants: {
    type: [String],
    required: true,
  },
  expenses: {
    type: [expenseSchema],
    required: false,
  },
});

const Trip = mongoose.model("Trip", tripSchema);

module.exports = Trip;
