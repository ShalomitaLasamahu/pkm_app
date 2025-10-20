const mysql = require("mysql2");
require("dotenv").config();

const conn = mysql.createConnection(process.env.DATABASE_URL);

conn.connect((err) => {
  if (err) {
    console.error("❌ Database connection failed:", err.message);
    console.log("DATABASE_URL:", process.env.DATABASE_URL ? "Exists" : "Missing");
    process.exit(1); // Exit gracefully instead of throwing
  }
  console.log("✅ Database connected...");
});

// Tambahkan error handling untuk connection errors setelah connect
conn.on('error', (err) => {
  console.error('❌ Database connection lost:', err.message);
});

module.exports = conn;