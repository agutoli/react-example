import React from 'react';

import CommentFragmentContainer from './CommentFragmentContainer';

class ContentFragment extends React.Component {
    render() {
        return (
            <div>
                <h3>{this.props.store_b5de1559_4266_445c_8799_03023734c36e.title}</h3>
                <p>{this.props.store_b5de1559_4266_445c_8799_03023734c36e.message}</p>
                <h2>{__('Comments')}</h2>
                <div>
                    {
                        this.props.store_2d88bb42_89e0_4b1b_9428_a244bf0c3bed.edges.map((obj, i) => {
                            return (<CommentFragmentContainer key={i} comment={obj} />);
                        })
                    }
                </div>
            </div>
        );
    }
}

export default ContentFragment;
