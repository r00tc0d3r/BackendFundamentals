// Dependencies
const express = require("express");

// Own functions
const path = require("path");
const { port } = require("./config");

// Importando router
const users = require("./routes/users");

const app = express();
// Seccion para los middleware
app.use(express.json());
app.use("/static", express.static(path.join(__dirname, "static"))); // Middleware para archivos estaticos

// Seccion de codigo para los router
app.use(users);

app.get("/", (req, res) => {
  console.log(__dirname);
  res.sendFile(path.join(__dirname, "views/index.html"));
});

app.listen(port, () => {
  console.log(`Listening on http://localhost:${port}`);
});
