const todoService = require("../services/todoService");

exports.getTodos = async (req, res) => {
  try {
    const todos = await todoService.getTodos();
    res.json(todos);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

exports.createTodo = async (req, res) => {
  try {
    const { taskName, assignee, priority } = req.body;
    const todo = await todoService.createTodo(taskName, assignee, priority);
    res.json(todo);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

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
