import Relay from 'react-relay';

class DefaultVariantRoute extends Relay.Route {
  static routeName = 'HomePageDefaultVariant';
  static queries = {
    query1: (Component) => Relay.QL`
      query {
        contents(
            query:{
                filters: [
                    {
                        filterType: "IN",
                        details:{},
                        values:["570636dee4b0f6f2d890a4aa"],
                        field:"CONTENT_LIST_ID"
                    }
                ],
                page: {
                    page: 0,
                    size: 10
                }
            },
        ) {
            ${Component.getFragment('query1')}
        }
      }
    `
  }
}

export default DefaultVariantRoute;
