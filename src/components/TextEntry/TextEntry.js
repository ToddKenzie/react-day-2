import React, { Component } from 'react';
import './TextEntry.css';

class TextEntry extends Component {
    render() {
        return (
            <section className="textentry">
                <label htmlFor="name">Your Name: </label>
                <input type="textbox" name="name" />
            </section>
        );
    }
}

export default TextEntry;