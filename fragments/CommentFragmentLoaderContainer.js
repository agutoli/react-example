import Relay from 'react-relay';

import CommentFragmentLoader from './CommentFragmentLoader';
import CommentFragmentContainer from './CommentFragmentContainer';

export default Relay.createContainer(CommentFragmentLoader, {
    fragments: {
        app: () => Relay.QL`
            fragment on Comment {
                id,
                ${CommentFragmentContainer.getFragment('comment')}
            }
        `
    }
});


            // fragment on Comment {
            //     id,
            //     ${CommentFragmentContainer.getFragment('comment')}
            // }

            // fragment on App {
            //     comments {
            //         edges {
            //             node {
            //                 id,
            //                 ${CommentFragmentContainer.getFragment('comment')}
            //             }
            //         }
            //     }
            // }
