import React from 'react';
import './App.css';
import Todos from '../pages/todos';
import Form from '../pages/form';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Nav from '../pages/nav';
import About from '../pages/about';
import axios from 'axios';


let emoji = "";

class App extends React.Component {
  state = {
    todos: [
    ]
  };

  componentDidMount = () => {
    axios.get("/chairs").then(response =>
      //console.log(response.data.data));
      this.setState({ todos: response.data.data })
    );
  }

  handleDelete = todoId => {
    const todos = this.state.todos.filter(todo => todo.id !== todoId);
    this.setState({ todos });
  };

  getEmoji = emojiObject => {
    emoji = emojiObject;
    console.log(emoji);
  };

  handleAddedTodo = (e) => {
    const addedTodo = e.target.previousSibling.value;
    const id = this.state.todos.length + 1;
    const selectedEmoji = emoji;
    const newTodo = { id: id, emoji: selectedEmoji, todo: addedTodo };
    const joined = this.state.todos.concat(newTodo);
    this.setState({ todos: joined });
  };


  render() {
    return (
      <Router>
        <div className="App">
          <Nav />
          <Switch>
            <Route path="/" exact>
              <div>
                <h1>Todo</h1>
                <Form onAdded={this.handleAddedTodo} onAddedEmoji={this.getEmoji} />
                <Todos todos={this.state.todos} onDelete={this.handleDelete} />
              </div>
            </Route>
            <Route path="/about" component={About}></Route>
          </Switch>
        </div>
      </Router>
    );
  }
}

export default App;