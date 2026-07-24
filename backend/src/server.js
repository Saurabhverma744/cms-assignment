const express = require("express");
const cors = require("cors");
const dotenv = require("dotenv");
const connectDB = require("./config/db");

const pageRoutes = require("./routes/pageRoutes");
const authRoutes = require("./routes/authRoutes");

dotenv.config();

// Connect to MongoDB
connectDB();

const app = express();

// Middleware
app.use(cors());
app.use(express.json());

// Routes
app.use("/api/pages", pageRoutes);
app.use("/api/auth", authRoutes);

// Test Route
app.get("/", (req, res) => {
  res.send("Backend is running");
});

// Start Server
const PORT = process.env.PORT || 5002;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
