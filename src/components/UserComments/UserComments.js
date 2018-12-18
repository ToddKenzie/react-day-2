import React, { Component } from 'react';
import Comment1 from './Comment/Comment1';
import Comment2 from './Comment/Comment2';
import Comment3 from './Comment/Comment3';


class UserComments extends Component {
    render() {
        return (
            <section className="usercomments">
                <Comment1 />
                <Comment2 />
                <Comment3 />          
            </section>
        );
    }
}

export default UserComments;