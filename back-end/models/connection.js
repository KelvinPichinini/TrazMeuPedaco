const mysql = require('mysql2/promise');
require('dotenv').config()

const connection = mysql.createPool({
    host: process.env.HOST,
    user: process.env.SQLUSER,
    password: process.env.PASSWORD,
    database: process.env.DB_NAME
})

module.exports = connection;