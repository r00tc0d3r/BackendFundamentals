const express = require("express");

const app = express();

app.get("/", (req, res) => {
  res.send("Metodo GET");
});

app.post("/usuarios", (req, res) => {
  res.send("Metodo POST");
});

app.put("/usuarios", (req, res) => {
  res.send("Metodo PUT");
});

app.delete("/usuarios", (req, res) => {
  res.send("Metodo DELETE");
});

app.listen(4000, () => {
  console.log("Listening on http://localhost:4000");
});
