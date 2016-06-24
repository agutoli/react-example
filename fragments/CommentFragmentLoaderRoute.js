import Relay from 'react-relay';

class CommentFragmentLoaderRoute extends Relay.Route {
    static routeName = 'CommentFragmentLoaderRoute';

    static queries = {
        app: (Component, args) => Relay.QL`
            query {
                app {
                    ${Component.getFragment('app', { contentId: args.contentId })}
                }
            }
        `
    }

    static paramDefinitions = {
        contentId: { required: true }
    };
}

export default CommentFragmentLoaderRoute;
