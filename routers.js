import React from 'react';
import { Router, IndexRoute, Route, Link, browserHistory } from 'react-router';
import { Modal, useHistory, useConfig } from 'xb-common-lib';

import MyContainerContainer from './MyContainer/MyContainerContainer';

let baseUrl = '/';
const { hostname, pathname } = window.location;

if(hostname === 'localhost') {
  try{
      baseUrl = pathname.match(/^\/project\/([a-f0-9]+\-)+[a-f0-9]+\/?/)[0];
  } catch(e) {}
}

export default (App) => {
    useHistory(browserHistory);
    // similiar with enviroment.js
    useConfig({
      host: {
        hostname: 'localhost',
        port: '5000',
        protocol: 'http:'
      }
    });

    return (
        <Router history={browserHistory}>
            <Route path={baseUrl} component={App}>
                <IndexRoute component={MyContainerContainer} />
                <Route path="mycontainer" component={MyContainerContainer} />
                <Route path="mycontainer/:param" component={MyContainerContainer} />
            </Route>
        </Router>
    );
};
