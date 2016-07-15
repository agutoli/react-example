import Relay from 'react-relay';

class DefaultVariantRoute extends Relay.Route {
    static routeName = 'DefaultVariantRoute';
    static queries = {
        query_a965e796_01fe_4486_bc80_2a699e87ae55: () => Relay.QL`query { app }`
    };
}

export default DefaultVariantRoute;
