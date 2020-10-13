const express = require("express");
var bodyParser = require("body-parser");
const app = express();
const port = 5000;

var jsonParser = bodyParser.json();

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
app.post('/update', jsonParser, (req, res) => {
    // create user in req.body
    let id = req.body.id;
    let emoji = req.body.emoji;
    let todo = req.body.todo;
    let newTodo = {
        id: id,
        emoji: emoji,
        todo: todo
    };
    todos.push(newTodo);
    console.log(todos);

    return res.send({ data: todos });

})



app.listen(port, () => console.log("works"));