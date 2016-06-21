import Relay from 'react-relay';

import Comment from './Comment';

export default Relay.createContainer(Comment, {
    fragments: {
        comment: () => Relay.QL`
            fragment on Comment {
               message,
            }
        `
    }
});
