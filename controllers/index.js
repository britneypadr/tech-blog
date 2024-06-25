const router = require('express').Router();
const authController = require('./authController');
const dashboardController = require('./dashboardController');
const homeController = require('./homeController');
const postController = require('./postController');

router.use('/auth', authController);
router.use('/dashboard', dashboardController);
router.use('/', homeController);
router.use('/post', postController);

module.exports = router;