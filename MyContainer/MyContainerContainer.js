import React from 'react';
import { ContainerRenderer } from 'xb-common-lib';

import LoginResource from './LoginResource';
import HomeResource from './HomeResource';

class MyContainerContainer extends ContainerRenderer {
    constructor(props) {
        super(props);
        console.log(this.props.params);
        this.addResource(LoginResource);
        this.addResource(HomeResource);
    }
}

export default MyContainerContainer;
