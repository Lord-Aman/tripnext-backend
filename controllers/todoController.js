const todoService = require("../services/todoService");

// Get todos for a specific trip
exports.getTodosByTripId = async (req, res) => {
  try {
    const { tripId } = req.params;
    const todos = await todoService.getTodosByTripId(tripId);
    res.json(todos);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Create a new todo for a trip
exports.createTodo = async (req, res) => {
  try {
    const { taskName, assignee, priority, tripId } = req.body;
    const todo = await todoService.createTodo(
      taskName,
      assignee,
      priority,
      tripId
    );
    res.json(todo);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Other CRUD operations (updateTodo, deleteTodo, reorderTodos) remain the same

exports.updateTodo = async (req, res) => {
  try {
    const { id } = req.params;
    const updatedTodo = await todoService.updateTodo(id, req.body);
    res.json(updatedTodo);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

exports.deleteTodo = async (req, res) => {
  try {
    const { id } = req.params;
    const result = await todoService.deleteTodo(id);
    res.json(result);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

exports.reorderTodos = async (req, res) => {
  try {
    const { todos } = req.body;
    const result = await todoService.reorderTodos(todos);
    res.json(result);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
