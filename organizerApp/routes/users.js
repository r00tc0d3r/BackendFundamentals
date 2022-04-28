// Dependencies
const express = require("express");
const router = express.Router();

app.get("/", (req, res) => {
  res.send("GET request to the homepage");
});

app.post("/", function (req, res) {
  res.send("POST request to the homepage");
});

module.exports = router;
