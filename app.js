const express = require("express");
const app = express();

const logMiddleware = (req, res) => {
  console.log(`
    HOST: ${req.headers.host}
    URL: ${req.url}
    METHOD: ${req.method}
  `);
};

// Modelo de QueryParams
app.get("/", logMiddleware, (req, res) => {
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
