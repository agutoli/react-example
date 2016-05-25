import React, { PropTypes } from 'react';
import connectToStores from 'alt-utils/lib/connectToStores';

import ModalStore from '../../stores/ModalStore';

class Modal extends React.Component {

    static getStores() {
        return [ ModalStore ];
    }

    static getPropsFromStores() {
        return ModalStore.getState();
    }

    render(){
        if (! this.props.visible) return null;
        return (
            <div className="app-modal">
                {this.props.content}
            </div>
        );
    }
}

Modal.propTypes = {
    visible: PropTypes.bool
};

Modal.defaultProps = {
    visible: false
};

export default connectToStores(Modal);
