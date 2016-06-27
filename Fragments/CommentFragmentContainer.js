import Relay from 'react-relay';

import CommentFragment from './CommentFragment';

export default Relay.createContainer(CommentFragment, {
    fragments: {
        comment: () => Relay.QL`
            fragment on Comment {
                id,
                message
            }
        `
    }
});
