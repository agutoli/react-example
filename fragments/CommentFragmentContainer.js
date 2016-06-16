import Relay from 'react-relay';
import CommentFragment from './CommentFragment';

Relay.createContainer(CommentFragment, {
    fragments: {
        comment: () => Relay.QL`
            {
                fragment on Comment {
                    message
                }
            }
        `
    }
})
