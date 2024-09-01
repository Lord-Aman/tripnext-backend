const Todo = require("../models/todoModel");

exports.getTodos = async () => {
  try {
    const todos = await Todo.find().sort({ order: 1 });
    return todos;
  } catch (error) {
    console.error("Error fetching todos:", error);
    throw new Error("Could not fetch todos");
  }
};

exports.createTodo = async (taskName, assignee, priority) => {
  try {
    const order = (await Todo.countDocuments()) + 1;
    const todo = new Todo({ taskName, assignee, priority, order });
    await todo.save();
    return todo;
  } catch (error) {
    console.error("Error creating todo:", error);
    throw new Error("Could not create todo");
  }
};

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

exports.deleteTodo = async (id) => {
  try {
    // Find and delete the todo
    const deletedTodo = await Todo.findByIdAndDelete(id);
    if (!deletedTodo) {
      throw new Error("Todo not found");
    }

    // Update the order of the remaining todos
    await Todo.updateMany(
      { order: { $gt: deletedTodo.order } },
      { $inc: { order: -1 } }
    );

    return { message: "Todo deleted and order updated" };
  } catch (error) {
    console.error(`Error deleting todo with id ${id}:`, error);
    throw new Error("Could not delete todo");
  }
};

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
