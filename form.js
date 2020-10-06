import React, { Component } from 'react';
import EmojiPicker from '../components/emojiPicker';

export default class Form extends Component {
    render() {
        return (
            <div >
                <EmojiPicker />
                <input type="text" placeholder="add a task"></input>
                <button onClick={this.props.onAdded}>Add</button>
            </div>
        );
    }
}

