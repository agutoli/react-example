import React from 'react';
import { Router, Route, Link, browserHistory } from 'react-router';

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
                <Route path="mycontainer" component={MyContainerContainer} />
            </Route>
        </Router>
    );
};

class AppRoute extends Relay.Route {
    static path = '/';
    static queries = {
        user: () => Relay.QL`query { user }`,
    };
    static routeName = 'LauncherRoute';
}

export default (App) => {
    return (
        <Router
            history={ browserHistory }
            createElement={createRelayContainer}>
            <Route>
                <Route
                    name="home" // added a name to the route
                    path="/"
                    component={App}
                    queries={HomeQueries} // and the query
                />
                <Route
                    name="widget"
                    path="/widget/:id"
                    component={Widget}
                    queries={WidgetQueries}
                />
            </Route>
        </Router>,
    );
}
