const express = require("express");
const cors = require("cors");
const connectDB = require("./config/db");
const todoRoutes = require("./routes/todoRoutes");
const tripRoutes = require("./routes/tripRoutes");
const eventRoutes = require("./routes/eventRoutes");

require("dotenv").config();

const app = express();
connectDB();

app.use(cors());
app.use(express.json());

// Prefix all routes with /api/todos
app.use("/api/todos", todoRoutes);
app.use("/api/trips", tripRoutes);
app.use("/api/events", eventRoutes);

// Health check route
app.get("/api/health", (req, res) => {
  res.status(200).json({ status: "OK", message: "Server is healthy" });
});

const PORT = process.env.PORT || 5006;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
