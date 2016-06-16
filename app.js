import React from 'react';
import { render } from 'react-dom';
import Router from './router';
import { Modal } from 'xb-common-lib';

class App extends React.Component {
    render() {
        return (
            <div>
                {this.props.children}
                <Modal />
            </div>
        );
    }
}

render(Router(App), document.getElementById('app'));
