import React from 'react';
import ContainerRenderer from './xb/ContainerRenderer.jsx';

// Resources
import LoggedResource from './LoggedResource.jsx';
import NotLoggedResource from './NotLoggedResource.jsx';

class HomeContainer extends ContainerRenderer {
  constructor(props) {
    super(props);

    this.addResource(LoggedResource);
    this.addResource(NotLoggedResource);
  }

  render(){
    const chosenResource = this.chooseResource();

    return (
      <DocumentTitle title="Home">
        <chosenResource />
      </DocumentTitle>
    );
  }
}

export default HomeContainer;
