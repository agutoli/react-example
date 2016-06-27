import React from 'react';
import { PageRenderer } from 'xb-common-lib';

import LoginResource from './LoginResource';
import HomeResource from './HomeResource';

class MyContainerContainer extends PageRenderer {
    constructor(props) {
        super(props);
        this.setTitle('My first XB experience');
        this.addVariant(LoginResource, { requiresAuthentication: false });
        this.addVariant(HomeResource, { requiresAuthentication: true });
    }
}

export default MyContainerContainer;
