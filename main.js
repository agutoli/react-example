import React from 'react';
import { render } from 'react-dom';
import Routers from './routers';
import { Modal } from 'xb-common-lib';

Relay.injectNetworkLayer(new Relay.DefaultNetworkLayer('localhost:5000/schema/xb'));

// The root queries for the main site
var HomeQueries = {
  Content922ec9531b1f94add983a8ce2ebdc97b: (Component) => Relay.QL`
    query Content922ec9531b1f94add983a8ce2ebdc97b {
        contents {
            edges {
                node {
                    id
                }
            }
        }
    }
  `,
};

class App extends React.Component {
  render(){
    return (
      <div>
        <h1>{ __('Experience Builder') }</h1>
        <h2>{ __('Cool Subtitle') }</h2>
        <hr />
        <div>{this.props.children}</div>
        <Modal />
      </div>
    );
  }
}

render(Routers(App), document.getElementById('app'))
