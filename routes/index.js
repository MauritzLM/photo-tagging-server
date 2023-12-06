const express = require('express');
const router = express.Router();

const imageController = require('../controllers/imageController');
const leaderboardController = require('../controllers/leaderboardController');
const gameTimeController = require('../controllers/gameController');

// Game time routes
// start game
router.post('/gamestart', gameTimeController.startGame);

// end game
router.post('/gameend', gameTimeController.endGame);

// Image details routes
router.post('/gameimage', imageController.getImageDetails);

// Leaderboard Routes
// get leaderboard
router.post('/getleaderboard', leaderboardController.getLeaderboard);

// update leaderboard
router.post('/leaderboard', leaderboardController.updateLeaderboard);

module.exports = router;