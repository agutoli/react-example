import React from 'react';
import { Router, IndexRoute, Route, Link, browserHistory } from 'react-router';

import MyContainerContainer from './MyContainer/MyContainerContainer';

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
            <Route path={baseUrl} component={App}>
                <IndexRoute component={MyContainerContainer} />
                <Route path="mycontainer" component={MyContainerContainer} />
                <Route path="mycontainer/:param" component={MyContainerContainer} />
            </Route>
        </Router>
    );
};
