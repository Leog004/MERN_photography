const mongoose = require('mongoose');

const eventSchema = new mongoose.Schema({
  user: {
    type: mongoose.Schema.ObjectId,
    ref: 'User',
    required: [true, 'Event must belong to a user'],
  },
  name: {
    type: String,
    required: [true, 'Name of venue or event is required'],
  },
  slug: String,
  description: {
    type: String,
    required: [true, 'Description of venue or event is required'],
  },
  eventType: {
    type: String,
    enum: ['wedding', '16th', 'merternity', 'business', 'sports', 'other'],
    default: 'other',
  },
  location: {
    type: String,
    required: [true, 'Location of venue or event is required'],
  },
  time: {
    type: String,
  },
  date: {
    type: Date,
  },
  dateAdded: {
    type: Date,
    default: Date.now(),
  },
});

const Event = mongoose.model('Event', eventSchema);

module.exports = Event;
