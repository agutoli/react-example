import React from 'react';
import DocumentTitle from 'react-document-title';

class ContainerRenderer extends React.Component {
    constructor(props) {
        super(props);
        this.resources = [];
    }

    render(){
        const chosenResource = this.chooseResource();
        return (
            <DocumentTitle title={this.title}>{chosenResource}</DocumentTitle>
        );
    }

    addResource(resource) {
        this.resources.push(resource);
    }

    chooseResource() {
        /**
        * TODO: Implements variants router
        */
       return React.createElement(this.resources[0]);
    }

    setTitle(title) {
        this.title = title;
    }
}

export default ContainerRenderer;
