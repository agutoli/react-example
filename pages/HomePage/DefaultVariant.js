import React from 'react';
import { eventActions } from 'xb-common-lib';
import Fragment1 from '../../fragments/ModalFragment';

class DefaultVariant extends React.Component {
    constructor(props) {
        super(props);
    }

    render(){
        let { content } = this.props;
        return (
            <div>
                <h4>{content.message}</h4>
                <button onClick={this.onClick_node_id_asd8a7d6as6asd63423dsasad.bind(this)}>Show Modal</button>
            </div>
        );
    }

    onClick_node_id_423rskfdsjf434rjdsadasdas(event) {
        // runScript(event, {});
        eventActions.showModal(<Fragment1 />);
    };
}
