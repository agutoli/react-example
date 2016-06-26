import Relay from 'react-relay';
import { SocialShare } from 'xb-common-lib';

export default Relay.createContainer(SocialShare, {
    fragments: {
        app: () => Relay.QL`
            fragment on App {
                shareCopies(postId: "2766572", first: 1000) {
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
