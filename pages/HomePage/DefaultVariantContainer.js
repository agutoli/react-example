import Relay from 'react-relay';

import DefaultVariant from './DefaultVariant';

export default Relay.createContainer(DefaultVariant, {
    fragments: {
        query1: () => Relay.QL `
            fragment on ContentsConnection {
                edges {
                    node {
                        id,
                        title,
                        message
                    }
                }
            }
        `
    }
});
