import React, { Component } from 'react';
import 'emoji-mart/css/emoji-mart.css';
import { Picker } from 'emoji-mart';

export default class EmojiPicker extends Component {

    constructor(props) {
        super(props);
        this.emojiPicker = React.createRef();
    }

    render() {
        return (
            <div className="emojiContainer">
                <div className="emojiLabel" onClick={this.showEmojis} >Add an emoji &#128522;</div>
                <div className="reactions" ref={this.emojiPicker}>
                    <Picker
                        showPreview={false}
                        showSkinTones={false}
                        onSelect={(emoji) => { this.props.onAddedEmoji(emoji.native) }}
                    />
                </div>
            </div>

        );
    }

    componentDidUpdate = () => {
        this.emojiPicker.current.classList.toggle("emojiList");
    }

    showEmojis(e) {
        //next sibling is the emoji picker
        e.target.nextSibling.classList.toggle("emojiList");
    }

}
