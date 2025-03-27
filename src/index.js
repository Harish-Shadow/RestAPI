import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import pool from "./config/db.js"; // Ensure this path is correct
import errorHandler from "./middleware/errorHandler.js";

import userRoutes from "./routes/userRoutes.js";
import createUserTable from "./data/createUSerTable.js";

dotenv.config();
const app = express();
const PORT = process.env.PORT || 3001;

// Middleware
app.use(express.json()); // Fix incorrect middleware usage
app.use(cors());



//error hasling
app.use(errorHandler);

http://localhost:5000/
//Creating Table
createUserTable();


// Testing Route
app.get("/", async (req, res) => {  // ✅ Make the function async
    try {
        const result = await pool.query("SELECT current_database()");
        res.send(`The database name is ${result.rows[0].current_database}`);
    } catch (error) {
        console.error("Database query error:", error);
        res.status(500).send("Server Error");
    }
});

// Routes
app.use("/api",userRoutes);

// Start Server
app.listen(PORT, () => {
    console.log(`🚀 Server is running on http://localhost:${PORT}`);
});
