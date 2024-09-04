const express = require("express");
const router = express.Router();
const eventController = require("../controllers/eventController");

// Create a new event
router.post("/", eventController.createEvent);

// Get all events for a specific trip
router.get("/trip/:tripId", eventController.getEventsByTripId);

// Get a single event by ID
router.get("/:id", eventController.getEventById);

// Update an event by ID
router.put("/:id", eventController.updateEvent);

// Delete an event by ID
router.delete("/:id", eventController.deleteEvent);

module.exports = router;
