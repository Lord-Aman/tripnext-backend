const express = require("express");
const router = express.Router();
const {
  getTodos,
  createTodo,
  updateTodo,
  deleteTodo,
  reorderTodos,
} = require("../controllers/todoController");

router.get("/", getTodos);
router.post("/", createTodo);
router.put("/reorder", reorderTodos);
router.put("/:id", updateTodo);
router.delete("/:id", deleteTodo);

module.exports = router;
