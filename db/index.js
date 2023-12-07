const { Pool, Client } = require('pg');


const pool = new Pool({
    host: process.env.DATABASE_URL,
    user: process.env.PGUSER,
    password: process.env.PGPASSWORD,
    port: process.env.PGPORT,
    database: process.env.PGDATABASE
})


module.exports = {
    query: (text, params) => pool.query(text, params)
}
