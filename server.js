// This is the Back-end logic to connect to MongoDB
const mongoose = require('mongoose');

// Connection string for MongoDB Atlas
const dbURI = "mongodb+srv://student:kjc123@cluster.mongodb.net/SEC_Project";

mongoose.connect(dbURI)
  .then(() => console.log("Successfully connected to MongoDB"))
  .catch((err) => console.log("Database connection error:", err));

// This function saves student data to the database
function saveStudent(name, usn) {
    console.log("Saving to MongoDB:", name, usn);
}
