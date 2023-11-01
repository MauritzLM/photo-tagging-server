const db = require('../db');

// start game
exports.startGame = async function (req, res, next) {
    try {

        const { id, image } = req.body;
        const start_time = Date.now();

        // create new row in table for game, save id, image and start time
        const text = 'INSERT INTO game_instance (id, image, start_time) VALUES($1, $2, $3)';
        const values = [id, image, start_time];

        // query db
        const result = await db.query(text, values);

        // response
        res.json(result);

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

