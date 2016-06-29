import React from 'react';
import Relay from 'react-relay';

import CommentFragmentContainer from './CommentFragmentContainer';

class CommentsFragment extends React.Component {
    render() {
        return (
            <div>
                <h3>Comments</h3>
                {
                    this.props.query_94f65249_7840_4c88_b28c_91ad7c898004.comments.edges.map((obj) => {
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

export default CommentsFragment;
