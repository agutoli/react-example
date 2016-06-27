import Relay from 'react-relay';

import DefaultVariant from './DefaultVariant';
import ContentFragmentContainer from '../../fragments/ContentFragmentContainer';

export default Relay.createContainer(DefaultVariant, {
    fragments: {
        query_a965e796_01fe_4486_bc80_2a699e87ae55: () => Relay.QL`
            fragment on App {
                contents(first: 10, query: {
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
                }) {
                    edges {
                        node {
                            id,
                            ${ContentFragmentContainer.getFragment('content')}
                        }
                    }
                }
            }
        `
    }
});
