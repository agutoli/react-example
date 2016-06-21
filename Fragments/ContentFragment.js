import React from 'react';
import Relay from 'react-relay';

class ContentFragment extends React.Component {
    render() {
        return (
            <div>
                <h1>{this.props.content.title}</h1>
                <p>{this.props.content.message}</p>
            </div>
        );
    }
}

export default ContentFragment;
