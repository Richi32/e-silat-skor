require('dotenv').config()
const mysql = require('mysql')
// Konfigurasi koneksi ke database
const db = mysql.createConnection({
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_DATABASE
});


db.connect((err) => {
    if(err) {
        throw err;
    }
    console.log('Terhubung ke database MySQL');
})

module.exports = db