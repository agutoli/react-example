import React from 'react';
import Relay from 'react-relay';
import {
    applyRouterMiddleware,
    IndexRoute,
    Link,
    Route,
    Router,
    browserHistory
} from 'react-router';
import useRelay from "react-router-relay";

import HomePage from './pages/HomePage';

let baseUrl = '/example';
const { hostname, pathname } = window.location;

if (hostname === 'localhost') {
  try{
      baseUrl = pathname.match(/^\/project\/([a-f0-9]+\-)+[a-f0-9]+\/?/)[0];
  } catch(e) {}
}

export default (App) => {
    return (
        <Router
            environment={Relay.Store}
            history={browserHistory}
            render={applyRouterMiddleware(useRelay)}>
            <Route
                path={baseUrl}
                component={App}>
                <IndexRoute component={HomePage} />
            </Route>
        </Router>
    );
};
