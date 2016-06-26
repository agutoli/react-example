import Relay from 'react-relay';

import DefaultVariant from './DefaultVariant';
import ContentFragmentContainer from '../../fragments/ContentFragmentContainer';

export default Relay.createContainer(DefaultVariant, {
    fragments: {
        app: () => Relay.QL`
            fragment on App {
                contents(first: 10, query: {
                    filters: [
                        {
                        filterType: "IN",
                        details:{},
                        values:["56ec210fd4c675f87f31627f"],
                        field:"CONTENT_LIST_ID"
                        }
                    ],
                    page: {
                        page: 0,
                        size: 10
                    },
                    experienceId: "0cdc67c4-d512-46b5-b86a-580c53d292bb",
                    projectId: "e508522e-edf2-4b36-8161-c30f1d6b7d7e"
                }) {
                edges{
                  node{
                    id
                    message
                    postId
                  }
                }
              }
            }
        `
    }
});
