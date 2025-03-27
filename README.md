# **CRUD REST API with PostgreSQL & Docker**  

## **📌 Introduction**  
Hey there! 👋 This project is a simple **CRUD API** built using **Node.js and Express.js**, with **PostgreSQL** as the database. Instead of installing PostgreSQL manually, we use **Docker** to run it in a container, making setup easy and clean.  

If you're looking for a **REST API** that connects to a PostgreSQL database, this guide will help you set everything up step by step. 🚀  

---

## **🛠️ What’s Inside?**  
- A **Node.js** server with Express.js handling API routes  
- A **PostgreSQL** database running inside a **Docker container**  
- **pg (node-postgres)** for interacting with the database  
- **Docker Compose** to manage the database setup  
- Full **CRUD operations** (Create, Read, Update, Delete) for user data  

---

## **📂 Project Structure**  
```
📦 CRUD-Rest-API
│── 📂 src
│   ├── 📂 config        # Database connection settings
│   ├── 📂 model         # Database queries (SQL commands)
│   ├── 📂 controller    # Handles the logic for API endpoints
│   ├── 📂 routes        # Defines the API routes
│   ├── index.js        # Main entry point to start the server
│── 📄 docker-compose.yml  # Docker setup for PostgreSQL
│── 📄 package.json        # Node.js dependencies
│── 📄 .env                # Configuration file (database credentials)
│── 📄 README.md           # This file! 🚀
```

---

## **🚀 How to Get Started**  

### **1️⃣ Clone the Repository**  
First, download the project files to your computer:  
```sh
git clone https://github.com/your-username/your-repo-name.git
cd your-repo-name
```

### **2️⃣ Set Up Your Environment Variables**  
In the project root folder, create a new file named **`.env`**. This file stores your **database credentials**.  

Copy and paste the following content into your `.env` file:  
```ini
DB_USER=postgres         # Username for PostgreSQL
DB_HOST=localhost        # Host where PostgreSQL is running
DB_NAME=postgres         # Database name
DB_PASSWORD=mysecretpassword  # Password for PostgreSQL
DB_PORT=5432             # Port to connect to PostgreSQL (default is 5432)
```
💡 **Important:** Never share your `.env` file publicly because it contains sensitive database credentials.  

### **3️⃣ Start PostgreSQL using Docker**  
Instead of installing PostgreSQL manually, we’ll use **Docker Compose** to run it in a container.  

Run this command:  
```sh
docker-compose up -d
```
✅ This will:  
- Pull the **PostgreSQL** image from Docker Hub  
- Start a **PostgreSQL container** in the background  
- Set up the database with the credentials from the `.env` file  

To check if the database is running:  
```sh
docker ps
```
You should see a **PostgreSQL container** in the list.  

### **4️⃣ Install Node.js Dependencies**  
Run this command inside the project folder:  
```sh
npm install
```
This will install all required packages, including **Express.js** and **pg (node-postgres)** for database access.  

### **5️⃣ Run the API Server**  
Once everything is set up, start the API server with:  
```sh
npm run dev
```
The server should now be running on **http://localhost:5000** 🎉  

---

## **📡 API Endpoints**  

| Method | Endpoint        | Description |
|--------|---------------|-------------|
| **GET**    | `/user`       | Fetch all users |
| **GET**    | `/user/:id`   | Fetch a user by ID |
| **POST**   | `/user`       | Create a new user |
| **PUT**    | `/user/:id`   | Update a user |
| **DELETE** | `/user/:id`   | Delete a user |

### **Example: Creating a New User**  
Make a **POST request** to `/user` with the following JSON body:  
```json
{
  "name": "John Doe",
  "email": "johndoe@example.com"
}
```
The response will look like this:  
```json
{
  "status": 201,
  "message": "User created successfully",
  "data": {
    "id": 1,
    "name": "John Doe",
    "email": "johndoe@example.com",
    "created_at": "2025-03-26T12:00:00.000Z"
  }
}
```

---

## **🐞 Troubleshooting**  

### **Docker Container Not Running?**  
Check all running containers:  
```sh
docker ps -a
```
If PostgreSQL is stopped, start it:  
```sh
docker start <container_id>
```

### **Database Connection Error?**  
Make sure your `.env` file is correct and matches the credentials used in `docker-compose.yml`.  

---

## **💡 Contributing**  
Want to improve this project? Feel free to submit an issue or a pull request! 🚀  

