import React from 'react';
import { Router, Route, Link, browserHistory } from 'react-router';

import MyContainerContainer from './MyContainer/MyContainerContainer';

let baseUrl = '/';
const { hostname, pathname } = window.location,
    projectRegex = /^\/project\/([a-f0-9]+\-)+[a-f0-9]+\/?/;

if(hostname === 'localhost' && projectRegex.test(pathname)) {
    baseUrl = pathname.match(projectRegex)[0];
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
