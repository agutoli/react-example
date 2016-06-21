import React from 'react';
import Relay from 'react-relay';
import Comment from './Comment';

class CommentFragment extends React.Component {
    render() {
        return (
            <div>
                {this.renderComments()}</p>
            </div>
        );
    }

    renderComments() {
        this.props.app.comments.map( (node, index) => {
            return (
                <Comment key={index} comment={node} />
            );
        });
    }
}

export default CommentFragment;
