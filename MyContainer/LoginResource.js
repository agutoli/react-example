import React from 'react';
import actions from './actions';

export default class LoginResource extends React.Component {

    onClick_asdsadasdasdasdas(event) {
        actions.onOpenModal(event, {options: []});
        actions.onCloseModal(event, {options: []});
    }

    onClick_asdasdasdasdasd(event) {
        actions.onOpenModal(event, {options: []});
        actions.onRunScript(event, {options: []});
    }

    onChange_asdasasdasdasdasddasdas(event) {
        actions.onOpenModal(event, {options: []});
        actions.onCloseModal(event, {options: []});
    }

    render(){
        return (
            <div>
              <button
                  onClick={this.onClick_asdsadasdasdasdas}
                  onChange={this.onChange_asdasasdasdasdasddasdas}></button>
              <button onClick={this.onClick_asdasdasdasdasd}></button>
            </div>
        );
    }
}
