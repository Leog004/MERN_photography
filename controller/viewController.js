const HomeModel = require('../models/viewHomeModel');
const GalleryModel = require('../models/viewGalleryModel');
const catchAsync = require('../utils/catchAsync');
const AppError = require('../utils/appError');
const factory = require('./handlerFactory');

// Get Home Page
exports.getHomePage = factory.getAll(HomeModel);

// Get Gallery Images
exports.getGalleryImages = factory.getOne(GalleryModel);
exports.getAllGalleryImages = factory.getAll(GalleryModel);
