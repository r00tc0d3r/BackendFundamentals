const express = require("express");

const { port } = require("./config");

const app = express();

app.listen(port, () => {
  console.log("App listening on port " + port);
});
