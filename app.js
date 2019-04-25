const express = require("express");
const nunjucks = require("nunjucks");
const app = express();

nunjucks.configure("views", {
  autoescape: true,
  express: app,
  watch: true
});

app.use(express.urlencoded({ extended: false }));
app.set("view engine", "njk");

const users = ["Pedro", "Carlos", "Gomes", "Santos"];

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

app.get("/nunjucks", (req, res) => {
  return res.render("list", { users });
});

app.get("/new", (req, res) => {
  return res.render("new");
});

app.post("/create", (req, res) => {
  users.push(req.body.user);
  res.redirect("/nunjucks");
});

app.listen(3000, console.log("Server rodando.."));
