import React from 'react';
import Relay from 'react-relay';

import { Router, Route, Link, browserHistory } from 'react-router';

import HomePage from './pages/HomePage';

let baseUrl = '/';
const { hostname, pathname } = window.location;

if(hostname === 'localhost') {
  try{
      baseUrl = pathname.match(/^\/project\/([a-f0-9]+\-)+[a-f0-9]+\/?/)[0];
  } catch(e) {}
}

export default (App) => {
    return (
        <Router history={browserHistory}>
            <Route path="/" component={App}>
                <Route path="home" component={HomePage} />
            </Route>
        </Router>
    );
};
