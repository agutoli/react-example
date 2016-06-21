import React from 'react';
import Relay from 'react-relay';

import CommentRoute from './CommentRoute';
import CommentFragmentContainer from './CommentFragmentContainer';

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
                    Component={CommentFragmentContainer}
                    route={new CommentRoute({
                        universalMessageId: this.props.content.universalMessageId
                    })}
                />
            </div>
        );
    }
}

export default ContentFragment;
