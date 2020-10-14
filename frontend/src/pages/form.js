import React, { Component } from 'react';
import EmojiPicker from '../components/emojiPicker';


export default class Form extends Component {

    constructor(props) {
        super(props);
        this.addTodoInput = React.createRef();

    }

    componentDidUpdate = () => {
        this.addTodoInput.current.value = "";
    }



    render() {
        return (
            <div className={"todoForm"}>
                <EmojiPicker onAddedEmoji={this.props.onAddedEmoji} ref={this.emojiPicker} />
                <input type="text" placeholder="add a task" ref={this.addTodoInput}></input>
                <button onClick={this.props.onAdded}>Add</button>
            </div>
        );

    }
}

