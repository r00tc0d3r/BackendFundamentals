const express = require("express");

const app = express();
app.use(express.text());
app.use(express.json());

app.get("/", (req, res) => {
  res.send("Metodo GET");
});

app.post("/usuarios", (req, res) => {
  console.log(req.body);
  res.send("Metodo POST");
});

app.post("/datos-json", (req, res) => {
  const user = req.body;
  res.json({
    saludo: "Hola" + user.nombre,
    domicilio: user.domicilio,
  });
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
