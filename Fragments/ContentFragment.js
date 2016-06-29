import React from 'react';
import Relay from 'react-relay';

import CommentsFragmentContainer from './CommentsFragmentContainer';
import CommentsFragmentRoute from './CommentsFragmentRoute';

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
                <Relay.RootContainer
                    Component={CommentsFragmentContainer}
                    route={new CommentsFragmentRoute({
                        contentId: this.props.content.id
                    })}
                />
            </div>
        );
    }
}

export default ContentFragment;
