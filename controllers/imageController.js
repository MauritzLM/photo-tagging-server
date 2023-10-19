const db = require('../db');

// get image info
exports.getImageDetails = async function (req, res, next) {
    try {

        // sample query
        const result = await db.query("SELECT score FROM test WHERE username IN ('Mo')");

        console.log(result);

        res.status(200).json(result);
        // req comes with numbers from click and image id
        // query db to get numbers of image
        // compare numbers
        // send result
    } catch (error) {
        return next(error);
    }
};