import React from 'react';
import './App.css';
import Todos from '../pages/todos';
import Form from '../pages/form';

let emoji = "";

class App extends React.Component {
  state = {
    todos: [
      { id: 1, emoji: 'books', todo: 'todo1' },
      { id: 2, emoji: 'wine', todo: 'todo2' },
      { id: 3, emoji: 'ball', todo: 'todo3' },
      { id: 4, emoji: 'apple', todo: 'todo4' }
    ]
  };


  handleDelete = todoId => {
    const todos = this.state.todos.filter(todo => todo.id !== todoId);
    this.setState({ todos });
  };

  getEmoji = emojiObject => {
    emoji = emojiObject;
    console.log(emoji);
  };


  handleAddedTodo = (e) => {
    //console.log("an update", e.target.previousSibling.value);
    const addedTodo = e.target.previousSibling.value;
    const id = this.state.todos.length + 1;
    const selectedEmoji = emoji;
    //const emoji = e.target.parentElement.children[0].innerHTML;
    //console.log(e.target.parentElement.children[0].innerHTML);
    const newTodo = { id: id, emoji: selectedEmoji, todo: addedTodo };
    const joined = this.state.todos.concat(newTodo);
    this.setState({ todos: joined });
  };

  render() {
    return (
      <div className="App">
        <h1>Todo</h1>
        <Form onAdded={this.handleAddedTodo} onAddedEmoji={this.getEmoji} />
        <Todos todos={this.state.todos} onDelete={this.handleDelete} />
      </div>
    );
  }
}

export default App;