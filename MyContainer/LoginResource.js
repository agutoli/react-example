import React from 'react';

import runScript from '../xb/actions/runScript';
import changeStyles from '../xb/actions/changeStyles';
import loadFirstPage from '../xb/actions/loadFirstPage';

export default class LoginResource extends React.Component {

    constructor(props) {
        super(props);
    }

    onClick_node_id_asd8a7d6as6asd63423dsasad(event) {
        changeStyles(event, {});
        loadFirstPage(event, {});
        runScript(event, {});
    };

    onClick_node_id_423rskfdsjf434rjdsadasdas(event) {
        runScript(event, {});
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
