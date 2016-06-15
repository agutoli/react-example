import React from 'react';
import { ContainerRenderer } from 'xb-common-lib';

import DefaultVariant from './HomeContainer/DefaultVariant';

class MyContainerContainer extends ContainerRenderer {
    constructor(props) {
        super(props);
        this.addVariant(DefaultVariant);
    }
}

export default MyContainerContainer;
