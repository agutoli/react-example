import Relay from 'react-relay';

class ShareFragmentLoaderRoute extends Relay.Route {
    static paramDefinitions = {
        postId: {required: true}
    };

    static routeName = 'ShareFragmentLoaderRoute';

    static queries = {
        app: (Component, data) => {
            return Relay.QL`
                query {
                    app {
                        ${Component.getFragment('app', data)}
                    }
                }
            `;
        }
    };
}

export default ShareFragmentLoaderRoute;
