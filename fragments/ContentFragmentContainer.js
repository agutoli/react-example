import Relay from 'react-relay';
import ContentFragment from './ContentFragment';
import CommentFragmentContainer from './CommentFragmentContainer';

export default Relay.createContainer(ContentFragment, {
    fragments: {
        store_b5de1559_4266_445c_8799_03023734c36e: () => Relay.QL`
            fragment on Content {
                title,
                message
            }
        `,
        store_2d88bb42_89e0_4b1b_9428_a244bf0c3bed: () => Relay.QL`
            fragment on CommentsConnection {
                edges {
                    node {
                        id,
                        ${CommentFragmentContainer.getFragment('store_2d88bb42_89e0_4b1b_9428_a244bf0c3bed')}
                    }
                }
            }
        `
    }
});
