import React from 'react';
import CommentFragment from './CommentFragment';

export default class ContentFragment extends React.Component {
    render(){
        let comments = this.props.comments.edges.map((edge) => {
        });

        return (
            <div>
                <h3>{this.props.content.title}</h3>
                <p>{this.props.content.message}</p>
                <h2>{__('Comments')}</h2>
                <div>
                    {
                        this.props.comments.edges.map((edge) => {
                            return (<CommentFragment key={edge.node.id} link={edge.node} />);
                        });
                    }
                    {comments}
                </div>
            </div>
        );
    }
}
