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
            <div>
                <div onClick={this.showEmojis} >Choose an emoji</div>
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
        // console.log(this.emojiPicker.current);
        this.emojiPicker.current.classList.toggle("emojiList");
    }


    showEmojis(e) {
        //next sibling is the emoji picker
        console.log(e.target.nextSibling);
        e.target.nextSibling.classList.toggle("emojiList");
    }

}
