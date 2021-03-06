import Relay from 'react-relay';

class CommentFragmentLoaderRoute extends Relay.Route {
    static routeName = 'CommentFragmentLoaderRoute';

    static queries = {
        query_94f65249_7840_4c88_b28c_91ad7c898004: (Component, { contentId }) => {
            return Relay.QL`
                query {
                    app {
                        ${Component.getFragment('query_94f65249_7840_4c88_b28c_91ad7c898004', { contentId })}
                    }
                }
            `;
        }
    };

    static paramDefinitions = {
        contentId: { required: true }
    };
}

export default CommentFragmentLoaderRoute;
