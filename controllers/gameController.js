const db = require('../db');

// start game
exports.startGame = async function (req, res, next) {
    try {

        // req data
        const { id, image } = req.body;

        // start time record
        const start_time = Date.now();

        // create placeholder name
        const randomNum = Math.random() * (1000 - 1) + 1;
        const placeholder_name = `Anonymous${Math.round(randomNum)}`;

        // create new row in table for game, save id, image, start time and placeholder name
        const text = 'INSERT INTO game_instance (id, image, start_time, player_name) VALUES($1, $2, $3, $4)';
        const values = [id, image, start_time, placeholder_name];

        // query db
        const result = await db.query(text, values);

        // response
        res.json(result.rows[0]);

    }
    catch (error) {
        return next(error)
    }
};

// end game
exports.endGame = async function (req, res, next) {
    try {

        // get id from req
        const { id } = req.body;

        // record end time
        const end_time = Date.now();

        // save end time and return row 
        const text = 'UPDATE game_instance SET end_time = $1 WHERE id = $2 RETURNING *';
        const values = [end_time, id];

        const result = await db.query(text, values);

        // calculate overall time
        const time = end_time - result.rows[0].start_time;

        console.log(time);

        // send response with overall time
        res.json(time);

    } catch (error) {
        return next(error)
    }
};

