const express = require("express");
var bodyParser = require("body-parser");
const app = express();
const port = 5000;

var jsonParser = bodyParser.json();
var urlencodedParser = bodyParser.urlencoded({ extended: false })

let todos = [
    { id: 1, emoji: '😂', todo: 'todo1' },
    { id: 2, emoji: '🏵️', todo: 'todo2' },
    { id: 3, emoji: '🐲', todo: 'todo3' },
    { id: 4, emoji: '🤩', todo: 'todo4' }
];

app.get("/todos", (req, res) => {
    return res.send({ data: todos });
});

app.delete("/todos/:id", (req, res) => {
    todos = todos.filter(todo => todo.id !== Number(req.params.id));
    return res.send({ data: todos });
});

// POST /api/users gets JSON bodies
app.post('/update', jsonParser, function (req, res) {
    // create user in req.body
    console.log(req.body.todo);
})



app.listen(port, () => console.log("works"));