import React from 'react';
import { render } from 'react-dom';
import { Router, Route, Link, browserHistory } from 'react-router';

// Containers
import HomeContainer from './HomeContainer.jsx';
import AboutContainer from './AboutContainer.jsx';

class App extends React.Component {
  render(){
    return (
      <div>{this.props.children}</div>
    );
  }
}

render((
  <Router history={browserHistory}>
    <Route path="/" component={App}>
      {/* <Route path="<ContainerPath>" component=<ContainerClass> /> */}
      <Route path="home" component={HomeContainer} />
      <Route path="about" component={AboutContainer} />
    </Route>
  </Router>
), document.getElementById('app'))
