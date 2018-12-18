import React, { Component } from 'react';
import UserComment from "../UserComment/UserComment";

class Comment3 extends Component {
    render() {
        return (
            <UserComment
                comment="wut?"
                user="klueless in seeattle"
                time="11:49am" />
        )
    }
}

export default Comment3;