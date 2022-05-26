const express = require("express");

const { port } = require("./config");

// Routes
const auth = require("./routes/auth");

const app = express();
app.use(auth);

// Configurando template engine
app.set("view engine", "pug");
app.set("views", "views");

app.listen(port, () => {
  console.log("App running -> http://localhost:" + port);
});
