import React from 'react';
import Relay from 'react-relay';

import CommentFragmentContainer from './CommentFragmentContainer';

class CommentFragmentLoader extends React.Component {
    render() {
        return (
            <div>
                {
                    this.props.comments.map((obj) => {
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
