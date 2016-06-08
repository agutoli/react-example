import React from 'react';
import components from 'xb-common-lib';

import LoginResource from './LoginResource';
import HomeResource from './HomeResource';


class MyContainerContainer extends components.ContainerRenderer {
    constructor(props) {
        super(props);
        this.addResource(LoginResource);
        this.addResource(HomeResource);
    }
}

export default MyContainerContainer;
