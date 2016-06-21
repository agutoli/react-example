import React from 'react';
import Relay from 'react-relay';

import { ContainerRenderer } from 'xb-common-lib';

import DefaultVariantContainer from './HomePage/DefaultVariantContainer';

// class HomePage extends ContainerRenderer {
//     constructor(props) {
//         super(props);
//         this.addVariant(DefaultVariant);
//     }
// }

class HomePage extends React.Component {
    render() {
        return (
            <DefaultVariantContainer app={this.props.app} />
        );
    }
}

export default HomePage;
