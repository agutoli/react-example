import React from 'react';
import Relay from 'react-relay';
import { eventActions } from 'xb-common-lib';
import Fragment1 from '../../fragments/ModalFragment';
import ContentFragment from '../../fragments/ContentFragment';
import ContentFragmentContainer from '../../fragments/ContentFragmentContainer';
import ContentFragmentRoute from '../../fragments/ContentFragmentRoute';

class DefaultVariant extends React.Component {
    render() {
        return (
            <div>
                {
                    this.props.store_b5de1559_4266_445c_8799_03023734c36e.edges.map((obj, i) => {
                        return (
                            <Relay.Container
                                key={i}
                                Component={ContentFragmentContainer}
                                renderFetched={props => <ContentFragment content={obj} {...props} />}
                                route={new ContentFragmentRoute()} />
                        );
                    })
                }
                <button onClick={this.onClick_a2bfbc91_742e_49eb_be97_389d5b85e364.bind(this)}>{__('Show Modal')}</button>
            </div>
        );
    }

    onClick_a2bfbc91_742e_49eb_be97_389d5b85e364(event) {
        // runScript(event, {});
        eventActions.showModal(<Fragment1 />);
    };
}

export default DefaultVariant;
