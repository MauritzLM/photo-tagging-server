const express = require('express');
const router = express.Router();

const imageController = require('../controllers/imageController');
const leaderboardController = require('../controllers/leaderboardController');
// import all routes
// mount routes

// image routes
router.get('/gameimage', imageController.getImageDetails);

// leaderboard routes
router.get('/leaderboard', leaderboardController.getLeaderboard);

router.post('/leaderboard', leaderboardController.updateLeaderboard);

module.exports = router;