import React from 'react';
import Relay from 'react-relay';
import { render } from 'react-dom';
import { Modal } from 'xb-common-lib';

import Router from './router';

Relay.injectNetworkLayer(new Relay.DefaultNetworkLayer('/schema/data', {credentials: 'same-origin'}));

class App extends React.Component {
    render() {
        return (
            <div>
                {this.props.children}
                <Modal />
            </div>
        );
    }
}

render(Router(App), document.getElementById('app'));
