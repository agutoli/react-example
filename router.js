import React from 'react';
import Relay from 'react-relay';

import {Router, Route, browserHistory} from 'react-router';
// import BrowserHistory from 'react-router/lib/BrowserHistory';
import ReactRouterRelay from 'react-router-relay';

import HomePage from './pages/HomePage';

// NOTE: Basic Router, we will generate a route per each page

export default (App) => {
    return (
        <Router
            history={browserHistory}
            createElement={ReactRouterRelay.createElement}>
            <Route component={App}>
                <Route
                    path="/"
                    component={HomePage} />
            </Route>
        </Router>
    );
}
