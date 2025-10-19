// db.js
require('dotenv').config();
const mysql = require('mysql2');

// Gunakan environment variable, bukan hardcode
const conn = mysql.createConnection({
  host: process.env.DB_HOST || 'localhost',
  user: process.env.DB_USER || 'root',
  password: process.env.DB_PASSWORD || '',
  database: process.env.DB_NAME || 'pkm_db',
  port: process.env.DB_PORT || 3306
});

// Coba koneksi ke database
conn.connect((err) => {
  if (err) {
    console.error('❌ Gagal koneksi ke database:', err.message);
    return;
  }
  console.log('✅ Berhasil konek ke database!');
});

module.exports = conn;
