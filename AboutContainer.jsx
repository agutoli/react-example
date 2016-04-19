import React from 'react';
import ContainerRenderer from './xb/ContainerRenderer.jsx';

// Resources
import NotLoggedResource from './NotLoggedResource.jsx';

class AboutContainer extends ContainerRenderer {
  constructor(props) {
    super(props);

    this.setTitle("AboutContainer");

    this.addResource(NotLoggedResource);
  }
}

export default AboutContainer;
