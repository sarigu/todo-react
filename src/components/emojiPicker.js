import React, { Component } from 'react';
import 'emoji-mart/css/emoji-mart.css';
import { Picker } from 'emoji-mart';

export default class EmojiPicker extends Component {

    render() {
        return (
            <div>
                <div onClick={this.showEmojis}>Choose an emoji</div>
                <div className="reactions">
                    <Picker
                        showPreview={false}
                        showSkinTones={false}
                        onSelect={(emoji) => { this.props.onAddedEmoji(emoji.native) }}
                    />
                </div>
            </div>

        );
    }

    showEmojis(e) {
        e.target.nextSibling.classList.toggle("emojiList");
    }

}
