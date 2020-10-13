const express = require("express");
const app = express();
const port = 5000;

let todos = [
    { id: 1, emoji: 'books', todo: 'todo1' },
    { id: 2, emoji: 'wine', todo: 'todo2' },
    { id: 3, emoji: 'ball', todo: 'todo3' },
    { id: 4, emoji: 'apple', todo: 'todo4' }
];

app.get("/chairs", (req, res) => {
    return res.send({ data: todos });
});



app.listen(port, () => console.log("works"));