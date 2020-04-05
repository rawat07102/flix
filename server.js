const express = require("express");
const cors = require("cors");
const path = require("path");
// route imports
const moviesRoutes = require("./routes/movies");

// initialize
const app = express();

// middlewares
app.use(express.json());
app.use(cors());

// static files
const buildPath = path.join(__dirname, "client/build");
app.use(express.static(buildPath));

// routes
app.use("/api/movie", moviesRoutes);
app.use("*", (req, res) => {
  res.sendFile(path.join(__dirname + "client/build/index.html"));
});
const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log("Listening on port " + PORT + "...");
});
