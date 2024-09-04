const mongoose = require("mongoose");

const eventSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
  date: {
    type: Date,
    required: true,
  },
  startTime: {
    type: String, // You can store time in string format (HH:MM format) or use a specific time type if needed
    required: true,
  },
  endTime: {
    type: String, // Similar to startTime
    required: true,
  },
  category: {
    type: String,
    enum: ["flight", "hotel", "others"], // Only these categories allowed
    required: true,
  },
  tripId: {
    type: mongoose.Schema.Types.ObjectId, // Reference to the Trip model
    ref: "Trip",
    required: true,
  },
});

const Event = mongoose.model("Event", eventSchema);

module.exports = Event;
