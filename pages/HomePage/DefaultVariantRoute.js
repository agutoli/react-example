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
                },
                experienceId: "5b51be2f-3dfa-46cb-996d-8b0a87aadc76",
                projectId: "c293b805-03d6-4adb-8ccc-c54c104dc720"
            },
        ) {
            ${Component.getFragment('query1')}
        }
      }
    `
  }
}

export default DefaultVariantRoute;
