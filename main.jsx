import React from 'react';
import { render } from 'react-dom';
import Routers from './routers.jsx';

class App extends React.Component {
  render(){
    return (
      <div>
        <h1>Experience Builder</h1>
        <hr />
        <div>{this.props.children}</div>
      </div>
    );
  }
}

render(Routers(App), document.getElementById('app'))
