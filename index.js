const express = require("express");
const app = express();
const db = require("./models/index");

app.use(express.json());

app.get("/todos", function (req, res) {
  db.todos.findAll({}).then((todos) => {
    res.send(todos);
  });
});

app.post("/todos", function (req, res) {
  console.log(req.body);
  db.todos.create(req.body).then(() => {
    res.status(201).end();
  });
});

app.listen(3000, () => console.log("Example app listening on port 3000!"));