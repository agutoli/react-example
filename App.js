import React from 'react';
import Relay from 'react-relay';
import { render } from 'react-dom';
import { Modal } from 'xb-common-lib';

import AppRouter from './AppRouter';

Relay.injectNetworkLayer(new Relay.DefaultNetworkLayer('/schema/data', {credentials: 'same-origin'}));

class App extends React.Component {
    render(){
        return (
            <div className="container">
                <Modal />
                {this.props.children}
            </div>
        );
    }
}

render(AppRouter(App), document.getElementById('app'));
