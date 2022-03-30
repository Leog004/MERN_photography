const mongoose = require('mongoose');

const viewHomeShema = new mongoose.Schema({
  coverImage: {
    type: String,
    required: [true, 'new view requires a cover image'],
  },
  title: String,
  text: String,
  Gallery: {
    type: mongoose.Schema.ObjectId,
    ref: 'viewGallery',
    required: [true, 'Gallery must already exist'],
  },
});

viewHomeShema.pre(/^find/, function (next) {
  this.populate('Gallery');
  next();
});

const viewHome = mongoose.model('viewHome', viewHomeShema);

module.exports = viewHome;
