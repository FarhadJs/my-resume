const express = require("express");
const path = require("path");
const cors = require("cors");
require("dotenv").config();

// Import routes
const commentRoutes = require("./routes/commentRoutes");

// Import database connection
const { connectToMongo } = require("./config/db");

const app = express();

// Middleware
app.use(express.json());
app.use(express.static(path.join(__dirname, "./client/dist")));
app.use(
  cors({
    origin: "http://localhost:5173",
    credentials: true,
    optionSuccessStatus: 200,
  })
);

// Connect to MongoDB
connectToMongo().catch(console.error);

// Routes
app.use("/api/comments", commentRoutes);

// Important: Handle Vue Router paths
// This should be after your API routes
app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "./client/dist/index.html"));
});

// Start server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
