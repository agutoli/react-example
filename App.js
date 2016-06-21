import React from 'react';
import Relay from 'react-relay';
import { render } from 'react-dom';
import { Modal } from 'xb-common-lib';

import AppRouter from './AppRouter';
import HomePageContainer from './pages/HomePageContainer';
import HomePageRoute from './pages/HomePageRoute';

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

// const App = Relay.createContainer(App);


                // <Relay.RootContainer
                //     Component={HomePageContainer}
                //     route={new HomePageRoute()} />




render(AppRouter(App), document.getElementById('app'));
