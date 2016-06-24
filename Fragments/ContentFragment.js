import React from 'react';
import Relay from 'react-relay';
import {eventHandlers, XBApi} from 'xb-common-lib';

import CommentFragmentLoaderContainer from './CommentFragmentLoaderContainer';
import CommentFragmentLoaderRoute from './CommentFragmentLoaderRoute';

class MyExample extends React.Component {
  render(){
    return (
      <div>I'm a modal</div>
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
          "modal": {
            "resourceId": "8e0d9036-5692-4974-a02d-60ac2233710c"
          }
        },
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
