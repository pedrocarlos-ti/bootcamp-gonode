const express = require("express");
const app = express();

// Modelo de QueryParams
app.get("/", (req, res) => {
  console.log(`Bem vindo ${req.query.name}`);
  res.json({
    message: `Bem vindo ${req.query.name}`
  });
});

// Modelo de Params
app.get("/login/:name", (req, res) => {
  console.log(`Bem vindo ${req.params.name}`);
  res.send();
});

app.listen(3000);
