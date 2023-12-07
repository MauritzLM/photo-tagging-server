const { Pool, Client } = require('pg');


const pool = new Pool();


module.exports = {
    query: (text, params) => pool.query(text, params)
}


// const pool = new Pool({
//     host: process.env.DATABASE_PRIVATE_URL,
//     user: process.env.PGUSER,
//     password: process.env.PGPASSWORD,
//     port: process.env.PGPORT,
//     database: process.env.PGDATABASE
// })
