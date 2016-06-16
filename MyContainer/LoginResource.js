import React from 'react';
import { eventActions } from 'xb-common-lib';
import Fragment1 from '../Fragments/f896c611-2e5f-4083-825a-7b8a5eca9cad';

const nodesDictionaries = {
  "asd8a7d6as6asd63423dsasad": { nodeId: "bar", settings: "...", props: "..."},
  "423rskfdsjf434rjdsadasdas": { nodeId: "foo", settings: "...", props: "..."}
};

export default class LoginResource extends React.Component {

    constructor(props) {
        super(props);
    }

    onClick_node_id_asd8a7d6as6asd63423dsasad(node, event) {
        eventActions.hideModal({ node, event });
    };

    onClick_node_id_423rskfdsjf434rjdsadasdas(node, event) {
        eventActions.showModal({ node, event }, <Fragment1 />);
    };

    render(){
        return (
            <div>
              <button onClick={this.onClick_node_id_asd8a7d6as6asd63423dsasad.bind(this, nodesDictionaries["asd8a7d6as6asd63423dsasad"])}>My Click 1</button>
              <button onClick={this.onClick_node_id_423rskfdsjf434rjdsadasdas.bind(this, nodesDictionaries["423rskfdsjf434rjdsadasdas"])}>My Click 2</button>
            </div>
        );
    }
}
