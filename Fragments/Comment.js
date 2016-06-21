import React from 'react';
import Relay from 'react-relay';

class Comment extends React.Component {
    render() {
        return (
            <div>
                <p>{this.props.comment.message}</p>
            </div>
        );
    }
}

export default Comment;
