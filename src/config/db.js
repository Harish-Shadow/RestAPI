import dotenv from "dotenv";
import pkg from "pg";

dotenv.config();  // Load .env variables

const { Pool } = pkg;

const pool = new Pool({
    user: process.env.DB_USER,
    host: process.env.DB_HOST,
    database: process.env.DATABASE,
    password: process.env.DB_PASSWORD?.trim() || "password",  // Ensure it's a string
    port: process.env.DB_PORT,
}); 

console.log("DB_USER:", process.env.DB_USER); // Debugging

pool.on("connect", () => {
    console.log("Connection pool established with Database");
});

export default pool;
