import React from 'react';
import Relay from 'react-relay';

import CommentFragmentContainer from './CommentFragmentContainer';

class CommentFragmentLoader extends React.Component {
    render() {
        const comments = this.props.app.comments.edges;
        return (
            <div>
                {
                    comments.map((obj) => {
                        return (
                            <CommentFragmentContainer
                                key={obj.node.id}
                                comment={obj.node} />
                        );
                    })
                }
            </div>
        );
    }
}

export default CommentFragmentLoader;
