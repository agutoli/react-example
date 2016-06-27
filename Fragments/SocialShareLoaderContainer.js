import Relay from 'react-relay';
import { SocialShare } from 'xb-common-lib';

export default Relay.createContainer(SocialShare, {
    initialVariables: {
        postId: null
    },
    fragments: {
        app: () => Relay.QL`
            fragment on App {
                shareCopies(postId: $postId, first: 1000) {
                    edges {
                        node {
                            id,
                            contentListId,
                            name
                        }
                    }
                }
            }
        `
    }
});
