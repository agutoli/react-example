import Relay from 'react-relay';
import AppQuery from '../AppQuery.js';
import HomePageContainer from './HomePageContainer';

class HomePageRoute extends Relay.Route {
    static routeName = 'HomePageRoute';
    static queries = AppQuery;
}

export default HomePageRoute;
