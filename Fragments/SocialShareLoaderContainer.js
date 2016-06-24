import Relay from 'react-relay';
import { SocialShare } from 'xb-common-lib';

export default Relay.createContainer(SocialShare, {
    fragments: {
        initialVariables: { contentId: null },
        app: () => Relay.QL`
            fragment on App {
                comments(first: 10, query: {
                    projectId:"c293b805-03d6-4adb-8ccc-c54c104dc720",
                    experienceId:"5b51be2f-3dfa-46cb-996d-8b0a87aadc76",
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
                            id
                        }
                    }
                }
            }
        `
    }
});
