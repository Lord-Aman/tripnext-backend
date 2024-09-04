const eventService = require("../services/eventService");

// Create a new event
exports.createEvent = async (req, res) => {
  try {
    const newEvent = await eventService.createEvent(req.body);
    res.status(201).json(newEvent);
  } catch (err) {
    res
      .status(500)
      .json({ message: "Error creating event", error: err.message });
  }
};

// Get events by tripId
exports.getEventsByTripId = async (req, res) => {
  try {
    const events = await eventService.getEventsByTripId(req.params.tripId);
    res.status(200).json(events);
  } catch (err) {
    res
      .status(500)
      .json({ message: "Error retrieving events", error: err.message });
  }
};

// Get a single event by ID
exports.getEventById = async (req, res) => {
  try {
    const event = await eventService.getEventById(req.params.id);
    if (!event) return res.status(404).json({ message: "Event not found" });
    res.status(200).json(event);
  } catch (err) {
    res
      .status(500)
      .json({ message: "Error retrieving event", error: err.message });
  }
};

// Update an event by ID
exports.updateEvent = async (req, res) => {
  try {
    const updatedEvent = await eventService.updateEvent(
      req.params.id,
      req.body
    );
    if (!updatedEvent)
      return res.status(404).json({ message: "Event not found" });
    res.status(200).json(updatedEvent);
  } catch (err) {
    res
      .status(500)
      .json({ message: "Error updating event", error: err.message });
  }
};

// Delete an event by ID
exports.deleteEvent = async (req, res) => {
  try {
    const deletedEvent = await eventService.deleteEvent(req.params.id);
    if (!deletedEvent)
      return res.status(404).json({ message: "Event not found" });
    res.status(200).json({ message: "Event deleted" });
  } catch (err) {
    res
      .status(500)
      .json({ message: "Error deleting event", error: err.message });
  }
};
