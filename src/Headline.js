import React, { Component } from 'react';


class Headline extends Component {
    constructor(props) {
        super(props);
    }
    render() {
        const textColor = this.props.isColor ?
        {'color': 'green'} :
        {'color': 'grey'};
        return (
            <h1 className="headline" style={textColor} >Welcome to React</h1>
        );
    }
}

export default Headline;