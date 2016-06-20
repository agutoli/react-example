import Relay from 'react-relay';

import DefaultVariant from './DefaultVariant';
import ContentFragmentContainer from '../../fragments/ContentFragmentContainer';

export default Relay.createContainer(DefaultVariant, {
    fragments: {
        store_b5de1559_4266_445c_8799_03023734c36e: () => Relay.QL`
            fragment on Content {
                id,
                ${ContentFragmentContainer.getFragment('store_b5de1559_4266_445c_8799_03023734c36e')}
            }
        `
    }
});
