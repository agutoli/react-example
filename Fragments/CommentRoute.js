import Relay from 'react-relay';

class CommentRoute extends Relay.Route {
    static routeName = 'ProfileRoute';
    static queries = {
        app: () => Relay.QL`
            query { app(universalMessageId: $universalMessageId) }
        `,
    };
    static paramDefinitions = {
        universalMessageId: {
            required: true
        },
    };
}

export default CommentRoute;
