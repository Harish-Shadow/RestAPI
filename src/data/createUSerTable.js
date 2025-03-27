import pool from "../config/db.js";

const createUserTable = async () => {
    const queryTest =`CREATE TABLE IF NOT EXISTS users(
    id SERIAL PRIMARY KEY,
    name VARCHAR(100) NOT NULL,
    email VARCHAR(100) UNIQUE NOT NULL,
    created_at TIMESTAMP DEFAULT NOW()
)`;
    try{
        pool.query(queryTest);
        console.log("User table created if not existed");

    }catch (error){
        console.log("Error creating users table: ",error);

    }
};

export default createUserTable;