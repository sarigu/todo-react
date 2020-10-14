import React, { Component } from 'react';

export default class Todo extends Component {
    render() {
        return (
            <li className={"todo"}>
                <span>{this.props.todo.emoji}</span>
                <p>{this.props.todo.todo}</p>
                <button onClick={this.changeBgColor}>Done</button>
                <button onClick={() => this.props.onDelete(this.props.todo.id)}>Remove</button>
            </li>
        );
    }

    changeBgColor(e) {
        e.target.parentElement.classList.toggle("todoDone");
    }


}

