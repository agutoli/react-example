import React from 'react';
import Relay from 'react-relay';
import { PageRenderer } from 'xb-common-lib';

import DefaultVariant from './HomePage/DefaultVariantContainer';
import DefaultVariantRoute from './HomePage/DefaultVariantRoute';

// class HomePage extends PageRenderer {
//     constructor(props) {
//         super(props);
//         this.title = 'Title';
//         this.addVariant(DefaultVariant);
//         console.log(props)
//     }
// }

class HomePage extends React.Component {
    render() {
        return(
            <Relay.RootContainer
                Component={DefaultVariant}
                route={new DefaultVariantRoute()} />
        )
    }
}

export default HomePage;
