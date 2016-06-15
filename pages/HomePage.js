import React from 'react';
import { ContainerRenderer } from 'xb-common-lib';

import DefaultVariant from './HomePage/DefaultVariant';

class HomePage extends ContainerRenderer {
    constructor(props) {
        super(props);
        this.addVariant(DefaultVariant);
    }
}

export default HomePage;
