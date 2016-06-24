import React from 'react';
import Relay from 'react-relay';

import CommentFragmentLoaderContainer from './CommentFragmentLoaderContainer';
import CommentFragmentLoaderRoute from './CommentFragmentLoaderRoute';

class ContentFragment extends React.Component {
    constructor(props) {
        super(props);

        this.state = { showComments: false };
    }

    render() {
        return (
            <div>
                <h1>{this.props.content.title}</h1>
                <p>{this.props.content.message}</p>
                <a href="#" onClick={this.onRenderComments.bind(this)}>{__('Show Comments')}</a>
                { this.renderComments() }
            </div>
        );
    }

    onRenderComments(event) {
        event.preventDefault();
        this.setState({
            showComments: true
        });
    }

    renderComments() {
        if (!this.state.showComments) return;

        return (
            <div>
                <h3>{__('Comments')}</h3>
                <Relay.RootContainer
                    Component={CommentFragmentLoaderContainer}
                    route={new CommentFragmentLoaderRoute({
                        contentId: this.props.content.id
                    })}
                />
            </div>
        );
    }
}

export default ContentFragment;
