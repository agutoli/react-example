import Relay from 'react-relay';

class ShareFragmentLoaderRoute extends Relay.Route {
    static routeName = 'ShareFragmentLoaderRoute';

    static queries = {
        app: (Component, data) => {
            console.log('router data--', data);
            return Relay.QL`
                query {
                    app {
                        ${Component.getFragment('app', data)}
                    }
                }
            `;
        }
    };
    static paramDefinitions = {
        contentId: {required: true}
    };
}

export default ShareFragmentLoaderRoute;
