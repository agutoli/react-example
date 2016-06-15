import Relay from 'react-relay';

import DefaultVariant from './DefaultVariant';

export default Relay.Container(DefaultVariant, {
    fragments: {
        content: () => Relay.QL `
            fragment on Content {
                id,
                message,
            }
        `
    }
});
