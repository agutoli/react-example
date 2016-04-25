import React from 'react';
import { Router, Route, Link, browserHistory } from 'react-router';

// Containers
import HomeContainer from './HomeContainer.jsx';
import AboutContainer from './AboutContainer.jsx';

export default (App) => {
  return (
    <Router history={browserHistory}>
      <Route path="/" component={App}>
        {/* <Route path="<ContainerPath>" component=<ContainerClass> /> */}
        <Route path="home" component={HomeContainer} />
        <Route path="about" component={AboutContainer} />
      </Route>
    </Router>
  );
};
