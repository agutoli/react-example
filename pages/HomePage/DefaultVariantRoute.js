import Relay from 'react-relay';
import AppQuery from '../../AppQuery';

class DefaultVariantRoute extends Relay.Route {
    static routeName = 'DefaultVariantRoute';
    static queries = AppQuery;
}

export default DefaultVariantRoute;
