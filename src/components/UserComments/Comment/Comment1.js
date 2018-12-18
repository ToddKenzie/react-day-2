import React, { Component } from 'react';
import UserComment from "../UserComment/UserComment";

class Comment1 extends Component {
    render() {
        return (
            <UserComment
                comment="This is pretty nifty!"
                user="Jay-Son"
                time="11:42am" />
        )
    }
}

export default Comment1;