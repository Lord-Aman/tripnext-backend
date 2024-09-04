const Event = require("../models/eventModel");

// Create a new event
exports.createEvent = async (eventData) => {
  const newEvent = new Event(eventData);
  return await newEvent.save();
};

// Get all events for a specific trip
exports.getEventsByTripId = async (tripId) => {
  return await Event.find({ tripId });
};

// Get a single event by ID
exports.getEventById = async (eventId) => {
  return await Event.findById(eventId);
};

// Update an event by ID
exports.updateEvent = async (eventId, eventData) => {
  return await Event.findByIdAndUpdate(eventId, eventData, { new: true });
};

// Delete an event by ID
exports.deleteEvent = async (eventId) => {
  return await Event.findByIdAndDelete(eventId);
};
