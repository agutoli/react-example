import Relay from 'react-relay';

class DefaultVariantRoute extends Relay.Route {
  static routeName = 'HomePageDefaultVariant';
  static queries = {
    store_2d88bb42_89e0_4b1b_9428_a244bf0c3bed: (Component) => Relay.QL`
      query {
        comments(
            query:{
                filters: [
                    {
                        filterType: "IN",
                        details:{},
                        values:["570636dee4b0f6f2d890a4aa"],
                        field:"CONTENT_LIST_ID"
                    },
                    {
                        filterType: "IN",
                        details:{},
                        value: $param1
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
            edges {
                node {
                    id,
                    ${Component.getFragment('store_2d88bb42_89e0_4b1b_9428_a244bf0c3bed')}
                }
            }
        }
      }
    `,
    }
    stagic paramDefinitions: {
        param1: {
            type: string
        }
    }
}

export default DefaultVariantRoute;
