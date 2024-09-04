const tripService = require("../services/tripService");

// Create a new trip
exports.createTrip = async (req, res) => {
  try {
    const newTrip = await tripService.createTrip(req.body);
    res.status(201).json(newTrip);
  } catch (err) {
    res
      .status(500)
      .json({ message: "Error creating trip", error: err.message });
  }
};

// Get all trips
exports.getAllTrips = async (req, res) => {
  try {
    const trips = await tripService.getAllTrips();
    res.status(200).json(trips);
  } catch (err) {
    res
      .status(500)
      .json({ message: "Error retrieving trips", error: err.message });
  }
};

// Get a trip by ID
exports.getTripById = async (req, res) => {
  try {
    const trip = await tripService.getTripById(req.params.id);
    if (!trip) return res.status(404).json({ message: "Trip not found" });
    res.status(200).json(trip);
  } catch (err) {
    res
      .status(500)
      .json({ message: "Error retrieving trip", error: err.message });
  }
};

// Get trips by userId
exports.getTripsByUserId = async (req, res) => {
  try {
    const trips = await tripService.getTripsByUserId(req.params.userId);
    if (trips.length === 0)
      return res.status(404).json({ message: "No trips found for this user" });
    res.status(200).json(trips);
  } catch (err) {
    res
      .status(500)
      .json({ message: "Error retrieving trips", error: err.message });
  }
};

// Update a trip by ID
exports.updateTrip = async (req, res) => {
  try {
    const updatedTrip = await tripService.updateTrip(req.params.id, req.body);
    if (!updatedTrip)
      return res.status(404).json({ message: "Trip not found" });
    res.status(200).json(updatedTrip);
  } catch (err) {
    res
      .status(500)
      .json({ message: "Error updating trip", error: err.message });
  }
};

// Delete a trip by ID
exports.deleteTrip = async (req, res) => {
  try {
    const deletedTrip = await tripService.deleteTrip(req.params.id);
    if (!deletedTrip)
      return res.status(404).json({ message: "Trip not found" });
    res.status(200).json({ message: "Trip deleted" });
  } catch (err) {
    res
      .status(500)
      .json({ message: "Error deleting trip", error: err.message });
  }
};
