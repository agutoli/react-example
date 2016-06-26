import React from 'react';
import Relay from 'react-relay';
import {eventHandlers, XBApi} from 'xb-common-lib';

import SocialShareLoaderContainer from './SocialShareLoaderContainer';
import ShareFragmentLoaderRoute from './ShareFragmentLoaderRoute';

import CommentFragmentLoaderContainer from './CommentFragmentLoaderContainer';
import CommentFragmentLoaderRoute from './CommentFragmentLoaderRoute';

class MyExample extends React.Component {
  render(){
    return (
      <div>A modal</div>
    );
  }
}

class ContentFragment extends React.Component {
    constructor(props) {
        super(props);
        console.log('props--', props);
        this.state = { showComments: false };
    }

    onShareClick = (event) => {
       eventHandlers.handleEvents(event, {
          share: <Relay.RootContainer
              Component={SocialShareLoaderContainer}
              route={new ShareFragmentLoaderRoute({
                  contentId: '56ec210fd4c675f87f31627f'
              })}
              renderLoading={function() {
              return <div>Loading...</div>;
              }} />
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
        console.log('comment props', this.props);
        if (!this.state.showComments) return;

        return (
            <div>
                <h3>{__('Comments')}</h3>

                <Relay.RootContainer
                    Component={CommentFragmentLoaderContainer}
                    route={new CommentFragmentLoaderRoute({
                        contentId: 'Q29udGVudDo1NzBiOTFmN2Q0YzYzNWY1MjU5MTQyMjU='
                    })}
                />
            </div>
        );
    }
}

export default ContentFragment;
