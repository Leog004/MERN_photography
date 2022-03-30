const mongoose = require('mongoose');

const viewGallerySchema = new mongoose.Schema({
  title: String,
  images: [String],
});

const viewGallery = mongoose.model('viewGallery', viewGallerySchema);

module.exports = viewGallery;
