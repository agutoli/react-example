import Relay from 'react-relay';

import ContentFragment from './ContentFragment';

export default Relay.createContainer(ContentFragment, {
    fragments: {
        content: () => Relay.QL`
            fragment on Content {
                id,
                title,
                message,
                postId,
                universalMessageId,
                shareEnabledChannels
            }
        `
    }
});
