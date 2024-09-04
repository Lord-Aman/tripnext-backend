const express = require("express");
const router = express.Router();
const tripController = require("../controllers/tripController");

// Create a new trip
router.post("/", tripController.createTrip);

// Get all trips
router.get("/", tripController.getAllTrips);

// Get a single trip by ID
router.get("/:id", tripController.getTripById);

// Update a trip by ID
router.put("/:id", tripController.updateTrip);

// Get trips by userId
router.get("/user/:userId", tripController.getTripsByUserId);

// Delete a trip by ID
router.delete("/:id", tripController.deleteTrip);

module.exports = router;
