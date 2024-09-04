const Todo = require("../models/todoModel");

// Get all todos for a specific trip
exports.getTodosByTripId = async (tripId) => {
  try {
    const todos = await Todo.find({ tripId }).sort({ order: 1 });
    return todos;
  } catch (error) {
    console.error("Error fetching todos:", error);
    throw new Error("Could not fetch todos");
  }
};

// Create a new todo for a trip
exports.createTodo = async (taskName, assignee, priority, tripId) => {
  try {
    const order = (await Todo.countDocuments({ tripId })) + 1;
    const todo = new Todo({ taskName, assignee, priority, order, tripId });
    await todo.save();
    return todo;
  } catch (error) {
    console.error("Error creating todo:", error);
    throw new Error("Could not create todo");
  }
};

// Update a todo by ID
exports.updateTodo = async (id, data) => {
  try {
    const updatedTodo = await Todo.findByIdAndUpdate(id, data, { new: true });
    if (!updatedTodo) {
      throw new Error("Todo not found");
    }
    return updatedTodo;
  } catch (error) {
    console.error(`Error updating todo with id ${id}:`, error);
    throw new Error("Could not update todo");
  }
};

// Delete a todo by ID and update the order of remaining todos for the trip
exports.deleteTodo = async (id) => {
  try {
    const deletedTodo = await Todo.findByIdAndDelete(id);
    if (!deletedTodo) {
      throw new Error("Todo not found");
    }

    await Todo.updateMany(
      { tripId: deletedTodo.tripId, order: { $gt: deletedTodo.order } },
      { $inc: { order: -1 } }
    );

    return { message: "Todo deleted and order updated" };
  } catch (error) {
    console.error(`Error deleting todo with id ${id}:`, error);
    throw new Error("Could not delete todo");
  }
};

// Reorder todos for a specific trip
exports.reorderTodos = async (todos) => {
  try {
    for (let i = 0; i < todos.length; i++) {
      const { _id, order } = todos[i];
      await Todo.findByIdAndUpdate(_id, { order });
    }
    return { message: "Todos reordered" };
  } catch (error) {
    console.error("Error reordering todos:", error.message);
    throw new Error("Could not reorder todos: ", error.message);
  }
};
