import React from 'react';

class ContentFragment extends React.Component {
    render() {
        return (
            <div>
                <h3>{this.props.content.title}</h3>
                <p>{this.props.content.message}</p>
                <h2>{__('Comments')}</h2>
                <div>
                    {
                        this.props.store_2d88bb42_89e0_4b1b_9428_a244bf0c3bed.edges.map((edge) => {
                            return (<CommentFragment key={edge.node.id} comment={edge.node} />);
                        })
                    }
                </div>
            </div>
        );
    }
}

export default ContentFragment;
