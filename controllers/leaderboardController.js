const db = require('../db');
const { body, validationResult } = require('express-validator');

// get leaderboard
exports.getLeaderboard = async function (req, res, next) {
   try {

      // clear abandoned games from table
      await db.query('DELETE FROM game_instance WHERE end_time is NULL');

      const { image } = req.body;

      const text = 'SELECT player_name, end_time - start_time AS time FROM game_instance WHERE image = $1 ORDER BY time DESC';
      const values = [image];

      // query db to get player_name and time -> sorted by time
      const result = await db.query(text, values);

      // send back json  
      res.json(result.rows);
   }
   catch (error) {
      return next(error);
   }
}

// add name to game instance
exports.updateLeaderboard = [
   // validate and sanitize data
   body('name', 'please enter a valid name')
      .trim()
      .isLength({ min: 1, max: 20 })
      .escape(),

   async function (req, res, next) {
      try {

         // validation errors
         const errors = validationResult(req);

         if (!errors.isEmpty()) {
            res.json({ errors: errors.array() });
            return;
         }

         const { id, name } = req.body;

         // update player_name column with entered name
         const text = 'UPDATE game_instance SET player_name = $1 WHERE id = $2';
         const values = [name, id];

         const result = await db.query(text, values);

         res.json(result);
      }
      catch (error) {
         return next(error)
      }
   }
];