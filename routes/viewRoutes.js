const express = require('express');
const userController = require('../controller/userController');
const authController = require('../controller/authController');
const viewController = require('../controller/viewController');

const router = express.Router();

router.route('/').get(viewController.getHomePage);

router.get('/gallery', viewController.getAllGalleryImages);
router.route('/gallery/:id').get(viewController.getGalleryImages);

module.exports = router;
