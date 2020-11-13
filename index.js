const express = require("express");
const app = express();
const db = require("./models/index");

app.use(express.json());

app.get("/todos", function (req, res) {
  db.todos.findAll({}).then((todos) => {
    res.send(todos);
  });
});

app.get("/todos/:id", function (req, res) {
  db.todos.findByPk(req.params.id).then((todos) => {
    res.send(todos);
  });
});

app.post("/todos", function (req, res) {
  db.todos.create(req.body).then(() => {
    res.status(201).end();
  });
});

app.patch("/todos/:id", function (req, res) {
  db.todos.update(
    req.body,
    {where: {id: req.params.id}}
  ).then(() => {
    res.status(200).end();
  });
});

app.listen(3000, () => console.log("Example app listening on port 3000!"));