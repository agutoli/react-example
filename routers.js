import React from 'react';
import { Router, Route, Link, browserHistory } from 'react-router';

import MyContainerContainer from './MyContainer/MyContainerContainer';

export default (App) => {
    return (
        <Router history={browserHistory}>
            <Route path="/" component={App}>
                <Route path="mycontainer" component={MyContainerContainer} />
            </Route>
        </Router>
    );
};
