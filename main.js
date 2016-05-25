import React from 'react';
import { render } from 'react-dom';
import Routers from './routers';

import Modal from './xb/components/modal';

class App extends React.Component {
  render(){
    return (
      <div>
        <h1>Experience Builder</h1>
        <hr />
        <div>{this.props.children}</div>
        <Modal />
      </div>
    );
  }
}

render(Routers(App), document.getElementById('app'))
