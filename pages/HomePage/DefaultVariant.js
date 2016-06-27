import React from 'react';
import Relay from 'react-relay';

import ContentFragmentContainer from '../../fragments/ContentFragmentContainer';

class DefaultVariant extends React.Component {
    render() {
        return (
            <div>
                <h1>Contents</h1>
                <div>
                    {
                        this.props.app.contents.edges.map((obj) => {
                            return (
                                <ContentFragmentContainer
                                    key={obj.node.id}
                                    content={obj.node} />
                            );
                        })
                    }
                </div>
            </div>
        );
    }
}

export default DefaultVariant;
