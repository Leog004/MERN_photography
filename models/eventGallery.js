const mongoose = require('mongoose');

const eventGallerySchema = new mongoose.Schema({
  user: {
    type: mongoose.Schema.ObjectId,
    ref: 'User',
    required: [true, 'Event Gallery must belong to a user'],
  },
  event: {
    type: mongoose.Schema.ObjectId,
    ref: 'Event',
    required: [true, 'Event Gallery must belong to an event'],
  },
  imageCover: {
    type: String,
    required: [true, 'A tour must have a cover image'],
  },
  images: [String],
  dateAdded: {
    type: Date,
    default: Date.now(),
  },
});

const Event = mongoose.model('EventGallery', eventGallerySchema);

module.exports = Event;
