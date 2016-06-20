import Relay from 'react-relay';

class ContentFragmentRoute extends Relay.Route {
    static routeName = 'ContentFragmentRoute';

    static queries = {
        store_2d88bb42_89e0_4b1b_9428_a244bf0c3bed: (Component) => Relay.QL`
            query {
                comments(
                    query: {
                        filters: [
                            { filterType: 'IN', field: 'SN_TYPE', values: [ 'ADVOCACY' ] },
                            { filterType: 'IN', field: 'SN_MESSAGE_TYPE', values: [ '203' ] },
                            { field: 'SOURCE_TYPE', filterType: 'IN', values: [ 'ACCOUNT' ] },
                        ],
                        page: {
                            page: 0,
                            size: 10
                        },
                        experienceId: "5b51be2f-3dfa-46cb-996d-8b0a87aadc76",
                        projectId: "c293b805-03d6-4adb-8ccc-c54c104dc720"
                    },
                ) {
                    ${Component.getFragment('store_2d88bb42_89e0_4b1b_9428_a244bf0c3bed')}
                }
            }
        `
    };
}

                            // {
                            //     field: 'CONVERSATION_ID',
                            //     filterType: 'EQUALS',
                            //     values: [],
                            //     details: {}
                            // }
export default ContentFragmentRoute;
