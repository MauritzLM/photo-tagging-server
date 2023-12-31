const db = require('../db');
const helpers = require('../helpers/helpers');

// get image info
exports.getImageDetails = async function (req, res, next) {
    
    try {
        // get values from request
        const { x, y, image, character } = req.body;

        // create parameterized query
        const text = 'SELECT * FROM characters WHERE name = $1 AND image = $2';
        const values = [character, image];

        // query db
        const result = await db.query(text, values);

        // save row returned
        const row = result.rows[0];

        // create character values object
        const characterValues = {
            x_min: row["x_min"],
            x_max: row["x_max"],
            y_min: row["y_min"],
            y_max: row["y_max"]
        };

        // check if tag is correct
        const isCorrect = helpers.compareValues(x, y, characterValues);

        // send result
        res.status(200).json(isCorrect);

    }
    catch (error) {

        res.json(false);
        return next(error);
    }
};