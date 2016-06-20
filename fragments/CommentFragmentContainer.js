import Relay from 'react-relay';
import CommentFragment from './CommentFragment';

Relay.createContainer(CommentFragment, {
    fragments: {
        store_2d88bb42_89e0_4b1b_9428_a244bf0c3bed: () => Relay.QL`
            {
                fragment on Comment {
                    message
                }
            }
        `
    }
})
