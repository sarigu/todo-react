import React, { Component } from 'react';
import Todo from '../components/todo';

export default class Todos extends Component {
    state = {
        todos: [
            { id: 1, emoji: 'books', todo: 'todo1' },
            { id: 2, emoji: 'wine', todo: 'todo2' },
            { id: 3, emoji: 'ball', todo: 'todo3' },
            { id: 4, emoji: 'apple', todo: 'todo4' }
        ]
    }

    handleDelete = todoId => {
        //console.log("event handler called", todoId);
        //neues arr erstellen mit allen AUßER dem elem mit der id 
        const todos = this.state.todos.filter(todo => todo.id !== todoId);
        //this.setState({ todos: todos });
        this.setState({ todos });
    };


    render() {
        return (
            <div >
                <ul>
                    {this.state.todos.map(todo => <Todo key={todo.id} onDelete={this.handleDelete} todo={todo} />)}
                </ul>
            </div >
        );
    }
}