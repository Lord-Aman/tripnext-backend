const express = require("express");
const router = express.Router();
const {
  getTodosByTripId,
  createTodo,
  updateTodo,
  deleteTodo,
  reorderTodos,
} = require("../controllers/todoController");

// Get todos for a specific trip
router.get("/trip/:tripId", getTodosByTripId);

// Create a new todo for a trip
router.post("/", createTodo);

// Reorder todos
router.put("/reorder", reorderTodos);

// Update a todo by ID
router.put("/:id", updateTodo);

// Delete a todo by ID
router.delete("/:id", deleteTodo);

module.exports = router;
