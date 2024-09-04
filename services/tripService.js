const Trip = require("../models/tripModel");

// Create a new trip
exports.createTrip = async (tripData) => {
  const newTrip = new Trip(tripData);
  return await newTrip.save();
};

// Get all trips
exports.getAllTrips = async () => {
  return await Trip.find({});
};

// Get a single trip by ID
exports.getTripById = async (tripId) => {
  return await Trip.findById(tripId);
};

// Get trips by userId
exports.getTripsByUserId = async (userId) => {
  return await Trip.find({ userId });
};

// Update a trip by ID
exports.updateTrip = async (tripId, tripData) => {
  return await Trip.findByIdAndUpdate(tripId, tripData, { new: true });
};

// Delete a trip by ID
exports.deleteTrip = async (tripId) => {
  return await Trip.findByIdAndDelete(tripId);
};
