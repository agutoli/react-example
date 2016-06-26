import Relay from 'react-relay';

class CommentFragmentLoaderRoute extends Relay.Route {
    static routeName = 'CommentFragmentLoaderRoute';

    static queries = {
        app: (Component, { contentId }) => {
            console.log('router--', contentId);
            return Relay.QL`
                query {
                    app {
                        ${Component.getFragment('app', { contentId })}
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
