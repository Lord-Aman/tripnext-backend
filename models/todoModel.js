const mongoose = require("mongoose");

const todoSchema = new mongoose.Schema(
  {
    taskName: { type: String, required: true },
    assignee: { type: String, required: true },
    priority: { type: String, enum: ["Low", "Medium", "High"], required: true },
    order: { type: Number, required: true },
    tripId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Trip",
      required: true, // Link each todo to a trip
    },
  },
  { timestamps: true }
);

const Todo = mongoose.model("Todo", todoSchema);

module.exports = Todo;
