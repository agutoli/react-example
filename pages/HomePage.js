import React from 'react';
import { PageRenderer } from 'xb-common-lib';

import DefaultVariant from './HomePage/DefaultVariant';

class HomePage extends PageRenderer {
    constructor(props) {
        super(props);
        this.title = 'Title';
        this.addVariant(DefaultVariant);
    }
}

export default HomePage;
