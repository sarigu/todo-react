import React, { Component } from 'react';

export default class Todo extends Component {

    constructor(props) {
        super(props);
        this.todoElem = React.createRef();
    }


    render() {
        return (
            <li className={"todo"} ref={this.todoElem}>
                <span>{this.props.todo.emoji}</span>
                <p>{this.props.todo.todo}</p>
                <div className={"todoButtons"}>
                    <button onClick={this.changeBgColor}>&#9989;</button>
                    <button onClick={() => this.props.onDelete(this.props.todo.id)}>&#x1f5d1;</button>
                </div>
            </li>
        );
    }

    changeBgColor = () => {
        this.todoElem.current.classList.toggle("todoDone");
    }


}

