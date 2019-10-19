const express = require("express");
const router = express.Router();
const fetch = require("node-fetch");

// util functions
const urlCreator = require("../utils/urlCreator");
// GET =>

// POPULAR MOVIES
router.get("/popular", async (req, res) => {
  const page = req.query.page || 1;
  const url = `${urlCreator("movie/popular")}&page=${page}`;
  const response = await fetch(url);
  const data = await response.json();
  res.send(data);
});

// MOVIE DETAILS WITH ID
router.get("/:movieId", async (req, res) => {
  const movieId = req.params.movieId;
  const url = urlCreator(`movie/${movieId}`);
  const response = await fetch(url);
  const data = await response.json();
  res.send(data);
});

// search Movie
router.get("/search/:searchQuery", async (req, res) => {
  const searchQuery = req.params.searchQuery;
  const url = `${urlCreator("search/movie")}&query=${searchQuery}`;
  const response = await fetch(url);
  const data = await response.json();
  res.send(data);
});

module.exports = router;
