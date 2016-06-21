import Relay from 'react-relay';

import ContentFragment from './ContentFragment';

export default Relay.createContainer(ContentFragment, {
    fragments: {
        content: () => Relay.QL`
            fragment on Content {
                title,
                message
            }
        `
    }
});

                // comments(query: $query) {
                //     edges {
                //         node {
                //             id,
                //             ${ContentFragmentContainer.getFragment('app')}
                //         }
                //     }
                // }
