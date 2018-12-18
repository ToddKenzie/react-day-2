import React, { Component } from 'react';

class TextEntry extends Component {
    render() {
        return (
            <section>
                <label htmlFor="name">Your Name: </label>
                <input type="textbox" name="name" />
            </section>
        );
    }
}

export default TextEntry;