import React from 'react';
import Relay from 'react-relay';

import { ContainerRenderer } from 'xb-common-lib';

import DefaultVariantContainer from './HomePage/DefaultVariantContainer';
import DefaultVariantRoute from './HomePage/DefaultVariantRoute';

// class HomePage extends ContainerRenderer {
//     constructor(props) {
//         super(props);
//         this.addVariant(DefaultVariant);
//     }
// }

class HomePage extends React.Component {
    render() {
        return (
            <Relay.RootContainer
                Component={DefaultVariantContainer}
                route={new DefaultVariantRoute()} />
        );
    }
}

export default HomePage;
