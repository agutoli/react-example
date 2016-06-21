import Relay from 'react-relay';

import HomePage from './HomePage';
import DefaultVariantContainer from './HomePage/DefaultVariantContainer';

export default Relay.createContainer(HomePage, {
    fragments: {
        app: () => Relay.QL`
            fragment on App {
                ${DefaultVariantContainer.getFragment('app')}
            }
        `
    }
});
