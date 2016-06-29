import React from 'react';
import Relay from 'react-relay';
import {
  XBApi,
  eventHandlers
} from 'xb-common-lib';

import CommentFragmentLoaderContainer from './CommentFragmentLoaderContainer';
import CommentFragmentLoaderRoute from './CommentFragmentLoaderRoute';

class MyExample extends React.Component {
  render(){
    return (
      <div>A modal</div>
    );
  }
}

class LoginExample extends React.Component {
  onLoginClick = (event) => {
      eventHandlers.handleEvents(event, {
          authenticate: {
            "app": {
              "id": "56fe8d8fd4c6662f204cc0b7",
              "provider": "TWITTER",
              "title": "Twitter app",
              "refresh": false
            }
          },
      }, new XBApi(this.props));
  }

  render(){
    return (
      <button onClick={this.onLoginClick}>Click to login</button>
    );
  }
}

class ContentFragment extends React.Component {
    constructor(props) {
        super(props);
        this.state = { showComments: false };
    }

    onShareClick = (event) => {
       eventHandlers.handleEvents(event, {
          share: {
            loginFragment: LoginExample,
            options: this.props
          }
      }, new XBApi(this.props));
    }

    onOpenModalClick = (event) => {
       eventHandlers.handleEvents(event, {
          openModal: MyExample
      });
    }

    onCloseModalClick = (event) => {
       eventHandlers.handleEvents(event, {
          closeModal: ''
      });
    }

    render() {
        return (
            <div>
                <h1>{this.props.content.title}</h1>
                <button onClick={this.onShareClick}> Share </button>
                <button onClick={this.onOpenModalClick}> open modal </button>
                <button onClick={this.onCloseModalClick}> close modal </button>
                <p>{this.props.content.id}</p>
                <p>{this.props.content.message}</p>
                <p>PostId - {this.props.content.postId}</p>
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
