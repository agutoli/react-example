import React from 'react';

import runScript from '../xb/actions/runScript';
import { loadFirstPage } from '../xb/actions/pagination';
import changeStyles from '../xb/actions/changeStyles';

export default class LoginResource extends React.Component {

    constructor(props) {
        super(props);
    }

    onClick_asdsadasdasdasdas(event) {
        changeStyles(event, {});
        loadFirstPage(event, {});
        runScript(event, {});
    };

    onClick_asdasdasdasdasd(event) {
        runScript(event, {});
    };

    render(){
        return (
            <div>
              <button onClick={this.onClick_asdsadasdasdasdas.bind(this)}>My Click 1</button>
              <button onClick={this.onClick_asdasdasdasdasd.bind(this)}>My Click 2</button>
            </div>
        );
    }
}
