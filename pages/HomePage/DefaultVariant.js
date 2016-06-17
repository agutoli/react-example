import React from 'react';
import { eventActions } from 'xb-common-lib';
import Fragment1 from '../../fragments/ModalFragment';

class DefaultVariant extends React.Component {
    render() {
        const contents = this.props.query1.edges.map((content, i) => {
            return (
                <div key={i}>
                    <h1>{content.node.title}</h1>
                    <p>{content.node.message}</p>
                </div>
            );
        })

        return (
            <div>
                {contents}
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
