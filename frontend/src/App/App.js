import React from 'react';
import './App.css';
import Todos from '../pages/todos';
import Form from '../pages/form';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Nav from '../pages/nav';
import About from '../pages/about';
import axios from 'axios';
import uuid from 'react-uuid'


let emoji = "";

class App extends React.Component {
  state = {};

  componentDidMount = () => {
    axios.get("/todos").then(response =>
      this.setState({ todos: response.data.data })
    );
  }

  handleDelete = todoId => {
    axios.delete("/todos/" + todoId).then(response =>
      this.setState({ todos: response.data.data })
    );
  };

  getEmoji = emojiObject => {
    emoji = emojiObject;
  };

  handleAddedTodo = (e) => {
    e.preventDefault();

    const addedTodo = e.target.previousSibling.value;
    const id = uuid();
    const selectedEmoji = emoji;

    const newTodo = {
      id: id,
      emoji: selectedEmoji,
      todo: addedTodo
    }

    axios.post('/todos', newTodo).then(response =>
      this.setState({ todos: response.data.data })
    );
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