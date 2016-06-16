import Relay from 'react-relay';
import ContentFragment from './ContentFragment';
import CommentFragment from './CommentFragmentContainer'

Relay.createContainer(ContentFragment, {
    fragments: {
        content: () => Relay.QL`
            {
                fragment on Content {
                    title,
                    message
                }
            }
        `,

        comments: () => Relay.QL`
            {
                fragment on Comment {
                    id,
                    ${CommentFragmentContainer.getFragment('comments')}
                }
            }
        `
    }
})
