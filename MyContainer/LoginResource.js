import React from 'react';
import { eventActions } from 'xb-common-lib';
import Fragment1 from '../Fragments/f896c611-2e5f-4083-825a-7b8a5eca9cad';

class LoginResource extends React.Component {

    constructor(props) {
        super(props);
    }

    onClick_node_id_asd8a7d6as6asd63423dsasad(event) {
        // changeStyles(event, {});
        // loadFirstPage(event, {});
        // runScript(event, {});
        eventActions.hideModal();
    };

    onClick_node_id_423rskfdsjf434rjdsadasdas(event) {
        // runScript(event, {});
        eventActions.showModal(<Fragment1 />);
    };

    render(){
        let { content } = this.props;
        return (
            <div>
                <h4>{content.message}</h4>
              <button onClick={this.onClick_node_id_asd8a7d6as6asd63423dsasad.bind(this)}>My Click 1</button>
              <button onClick={this.onClick_node_id_423rskfdsjf434rjdsadasdas.bind(this)}>My Click 2</button>
            </div>
        );
    }
}

export default Relay.Container(LoginResource, {
    fragments: {
        content: () => Relay.QL `
            fragment on Content {
                message
            }
        `
    }
});
