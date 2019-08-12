require ("dotenv").config();
const axios = require("axios");
const router = require("express").Router();
let apiKey = process.env.API_KEY;


// Matches '/api'
router.get("/api/books", (req, res) => {
  axios
    .get("https://www.googleapis.com/books/v1/volumes/zyTCAlFPjgYC?key=" + apiKey, { params: req.query })
    .then(({ data: { results } }) => res.json(results))
    .catch(err => res.status(422).json(err));
});

module.exports = router;
