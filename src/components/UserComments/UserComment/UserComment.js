import React, { Component } from 'react';
import "./UserComment.css";

class UserComment extends Component {
    render() {
        const {comment, user, time} = this.props;
        return (
            <article className="usercomment">
                <p>{comment}</p>
                <p><span>{user}</span> at <span>{time}</span></p>
            </article>
        );
    }
}

export default UserComment;