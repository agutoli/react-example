import React from 'react';

export default class CommentFragment extends React.Component {
    render(){
        return (
            <div>
                <p>{this.props.comment.message}</p>
            </div>
        );
    }
}
