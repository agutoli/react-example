import React from 'react';
import { eventActions } from 'xb-common-lib';
import Fragment1 from '../../fragments/ModalFragment';

class DefaultVariant extends React.Component {
    render() {
        let { content } = this.props;
        return (
            <div>
                <button onClick={this.onClick_node_id_asd8a7d6as6asd63423dsasad.bind(this)}>Show Modal</button>
            </div>
        );
    }

    onClick_node_id_asd8a7d6as6asd63423dsasad(event) {
        // runScript(event, {});
        eventActions.showModal(<Fragment1 />);
    };
}

export default DefaultVariant;
