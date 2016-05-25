import React from 'react';

import runScript from '../xb/eventActions/runScript';
import changeStyles from '../xb/eventActions/changeStyles';
import loadFirstPage from '../xb/eventActions/loadFirstPage';
import showModal from '../xb/eventActions/showModal';
import hideModal from '../xb/eventActions/hideModal';

import Fragment1 from '../Fragments/f896c611-2e5f-4083-825a-7b8a5eca9cad';

export default class LoginResource extends React.Component {

    constructor(props) {
        super(props);
    }

    onClick_node_id_asd8a7d6as6asd63423dsasad(event) {
        // changeStyles(event, {});
        // loadFirstPage(event, {});
        // runScript(event, {});
        hideModal();
    };

    onClick_node_id_423rskfdsjf434rjdsadasdas(event) {
        // runScript(event, {});
        showModal(<Fragment1 />);
    };

    render(){
        return (
            <div>
              <button onClick={this.onClick_node_id_asd8a7d6as6asd63423dsasad.bind(this)}>My Click 1</button>
              <button onClick={this.onClick_node_id_423rskfdsjf434rjdsadasdas.bind(this)}>My Click 2</button>
            </div>
        );
    }
}
