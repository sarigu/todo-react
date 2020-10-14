const express = require("express");
var bodyParser = require("body-parser");
const app = express();
const port = 5000;

var jsonParser = bodyParser.json();

let todos = [
    { id: "1dq894032894", emoji: '😂', todo: 'todo1' },
    { id: "2dwio213", emoji: '🏵️', todo: 'todo2' },
    { id: "3", emoji: '🐲', todo: 'todo3' },
    { id: "4", emoji: '🤩', todo: 'todo4' }
];

app.get("/todos", (req, res) => {
    return res.send({ data: todos });
});

app.delete("/todos/:id", (req, res) => {
    todos = todos.filter(todo => todo.id !== req.params.id);
    return res.send({ data: todos });
});


app.post('/todos', jsonParser, (req, res) => {

    let newTodo = {
        id: req.body.id,
        emoji: req.body.emoji,
        todo: req.body.todo
    };

    todos.push(newTodo);

    return res.send({ data: todos });

})



app.listen(port, () => console.log("works"));