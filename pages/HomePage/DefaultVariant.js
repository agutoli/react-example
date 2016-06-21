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
                        this.props.app.contents.edges.map((obj, i) => {
                            return (<ContentFragmentContainer key={i} content={obj.node} />);
                        })
                    }
                </div>
            </div>
        );
    }
}

export default DefaultVariant;
