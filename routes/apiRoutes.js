require ("dotenv").config();
const axios = require("axios");
const router = require("express").Router();
let apiKey = process.env.API_KEY;


// Matches '/api'
router.get("/books", (req, res) => {
  console.log('Inside /api/books get route', req.query)
  const { query: params } = req;
  axios
    .get("https://www.googleapis.com/books/v1/volumes/", { params })
    .then((results) => {
      res.json(results.data)
    })
    .catch(err => res.status(422).json(err));
});

router.post("/savedbooks", (req, res) => {
  console.log("inside api routes savedbooks", req.body);
});

module.exports = router;
