import React from 'react';
import { Router, Route, Link, browserHistory } from 'react-router';

import MyContainerContainer from './MyContainer/MyContainerContainer';

let baseUrl = '/';
const { hostname, pathname } = window.location;

if(hostname === 'localhost') {
  baseUrl = pathname.match(/^\/project\/([a-f0-9]+\-)+[a-f0-9]+\/?/)[0];
}

export default (App) => {
    return (
        <Router history={browserHistory}>
            <Route path={baseUrl} component={App}>
                <Route path="mycontainer" component={MyContainerContainer} />
            </Route>
        </Router>
    );
};
