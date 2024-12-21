# CRUD
Step 1: Setup Frontend and Backend
Create Project Folders:

Frontend: mern/frontend
Backend: mern/backend
Setup React App in mern/frontend:

bash
Copy code
npx create-react-app .
Setup Node.js Server in mern/backend:

bash
Copy code
npm init -y
Step 2: Create First API with Express
Install Dependencies:

bash
Copy code
npm i express dotenv cors
npm install --save-dev nodemon
Create Server: server.js in mern/backend:

javascript
Copy code
const express = require("express");
const app = express();
app.get("/", (req, res) => {
  res.send("API running");
});
app.listen(4000);
Step 3: Install MongoDB Locally
Download MongoDB from the official site.
Install MongoDB Compass (optional for GUI).
Set Environment Variables for MongoDB, and restart your PC.
Step 4: Connect MongoDB with Node.js
Install Mongoose:

bash
Copy code
npm i mongoose
Create .env File:

env
Copy code
PORT=8000
URI="mongodb://localhost:27017/demo2"
Update server.js to connect to MongoDB:

javascript
Copy code
const mongoose = require("mongoose");
const dotenv = require("dotenv");
dotenv.config();

mongoose.connect(process.env.URI)
  .then(() => console.log("Connected Successfully"))
  .catch((error) => console.log("Failed to connect", error));
Step 5: Create Mongoose Schema and Model
Define Schema (userDataModel.js):
javascript
Copy code
const mongoose = require("mongoose");

const userDataSchema = new mongoose.Schema({
  name: { type: String, required: true },
  email: { type: String, unique: true, required: true },
  age: { type: Number },
});

const userData = mongoose.model("UserData", userDataSchema);
module.exports = userData;
Step 6-9: CRUD Operations
Create Route (userDataRoute.js):

javascript
Copy code
router.post("/", async (req, res) => {
  // Handle POST request to add user data
});
Read Operation:

javascript
Copy code
router.get("/", async (req, res) => {
  // Handle GET request to fetch all users
});
Update Operation:

javascript
Copy code
router.patch("/edit/:id", async (req, res) => {
  // Handle PATCH request to update a user
});
Delete Operation:

javascript
Copy code
router.delete("/:id", async (req, res) => {
  // Handle DELETE request to remove a user
});
Step 10: Setup Frontend React
Run React App:
bash
Copy code
npm start
Step 11: Add Routing with React Router
Install React Router:

bash
Copy code
npm i react-router-dom
Define Routes in App.js:

javascript
Copy code
<Routes>
  <Route path="/" element={<Create />} />
  <Route path="/read" element={<Read />} />
  <Route path="/:id" element={<Update />} />
</Routes>
Step 12-15: Frontend CRUD Operations
Create Component (Create.jsx): Handle form submissions to create new users.

Read Component (Read.jsx): Fetch and display the list of users.

Update Component (Update.jsx): Fetch a single user data for editing and send updates back to the server.

Navbar Component (Navbar.jsx): Add navigation links for CRUD operations.

Step 16: Connect Frontend and Backend
Ensure the React frontend communicates with the Express backend via the provided API endpoints (e.g., /, /read, /edit/:id).
