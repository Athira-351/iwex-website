import mysql from "mysql2";
import dotenv from "dotenv";

// Load environment file based on NODE_ENV
dotenv.config({ path: `.env.${process.env.NODE_ENV}` });

const db = mysql.createConnection({
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  password: process.env.DB_PASS,
  database: process.env.DB_NAME
});

db.connect(err => {
  if (err) {
    console.error("❌ DB connection failed:", err);
    process.exit(1);
  }
  console.log(`✅ MySQL connected to ${process.env.DB_NAME}`);
});

export default db;
