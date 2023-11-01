const db = require('../db');

// get leaderboard
exports.getLeaderboard = async function (req, res, next) {
   try {

      // clear table? (where end time = null)*

      const { image } = req.body;

      const text = 'SELECT * FROM game_instance WHERE image = $1';
      const values = [image];

      // query db to get leaderboard
      const result = await db.query(text, values);

      // sort by score*

      // send back json  
      res.status(200).json(result);
   }
   catch (error) {
      return next(error);
   }
}

// add name to game instance*
exports.updateLeaderboard = async function (req, res, next) {
   try {

      // validate and sanitize data*

      const { id, name } = req.body;

      const text = 'INSERT INTO game_instance (player_name) VALUES($1) WHERE id = $2'
      const values = [name, id];

      const result = await db.query(text, values);

      res.json(result);
   }
   catch (error) {
      return next(error)
   }
}