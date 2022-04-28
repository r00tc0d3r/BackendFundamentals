// Dependencies
const express = require("express");

// Own functions
const path = require("path");
const { port } = require("./config");

const app = express();
app.use(express.json());

app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "static/index.html"));
});

app.listen(port, () => {
  console.log(`Listening on http://localhost:${port}`);
});
