const db = require('../db');

// get leaderboard
exports.getLeaderboard = async function(req,res,next) {
      try {

        const result = await db.query('SELECT username FROM test')
         // query db to get leaderboard
         // sort leaderboard by score
         // send back json  
         res.status(200).json(result);
      } 
      catch (error) {
        return next(error);
      }
}

// update leaderboard
exports.updateLeaderboard = async function(req,res,next) {
    try {
       // req comes with form data
       // check table and compare scores?
       // create new row in table with form data
       //     
    }
     catch (error) {
        return next(error);
    }
}