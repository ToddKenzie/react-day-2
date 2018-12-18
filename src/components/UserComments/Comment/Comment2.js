import React, { Component } from 'react';
import UserComment from "../UserComment/UserComment";

class Comment2 extends Component {
    render() {
        return (
            <UserComment
                comment="This is garbage!!"
                user="Oscar"
                time="11:45am" />
        )
    }
}

export default Comment2;