import Relay from 'react-relay';

import CommentFragmentLoader from './CommentFragmentLoader';
import CommentFragmentContainer from './CommentFragmentContainer';

export default Relay.createContainer(CommentFragmentLoader, {
    initialVariables: { contentId: null },
    fragments: {
        query_94f65249_7840_4c88_b28c_91ad7c898004: () => Relay.QL`
            fragment on App {
                comments(contentId: $contentId, first: 10, query: {
                    projectId:"e508522e-edf2-4b36-8161-c30f1d6b7d7e",
                    experienceId:"0cdc67c4-d512-46b5-b86a-580c53d292bb",
                    filters:[
                        {
                            filterType:"IN",
                            field:"SN_TYPE",
                            values:[
                                "ADVOCACY"
                            ]
                        },
                        {
                            filterType:"IN",
                            field:"SN_MESSAGE_TYPE",
                            values:[
                                "203"
                            ]
                        },
                        {
                            field:"SOURCE_TYPE",
                            filterType:"IN",
                            values:[
                                "ACCOUNT"
                            ]
                        }
                    ],
                    sorts:[
                        {
                            key:"snCTm",
                            order:"ASC"
                        }
                    ],
                    page:{
                        page:0,
                        size:3
                    }
                }) {
                    edges {
                        node {
                            ${CommentFragmentContainer.getFragment('comment')}
                        }
                    }
                }
            }
        `
    }
});
