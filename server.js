require("dotenv").config();

const express = require("express");
const cors = require("cors");

const connectDB = require("./config/db");
const userRoutes = require("./routes/userRoutes");

const app = express();


// DATABASE CONNECTION
connectDB();


// MIDDLEWARE
app.use(cors());

app.use(express.json({ limit: "10mb" }));
app.use(express.urlencoded({ limit: "10mb", extended: true }));


// ROOT ROUTE
app.get("/", (req, res) => {
  res.send("Bulk User Management API is running");
});


// USER ROUTES
app.use("/api/users", userRoutes);


// SERVER
const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Server running on ${PORT}`);
});