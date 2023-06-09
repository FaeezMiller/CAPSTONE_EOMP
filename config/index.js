const mysql = require('mysql2');
require('dotenv').config();

let con = mysql.createConnection({
    host:process.env.HOST,
    user:process.env.USER,
    password:process.env.PASS,
    port:process.env.DB_PORT,
    database:process.env.DB,
    multipleStatements:true
});
module.exports = con;