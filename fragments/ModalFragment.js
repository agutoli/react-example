import React from 'react';

export default class ModalFragment extends React.Component {
    render(){
        return (
            <div>
                <span onClick={this.onClick_edfa8f64_c0e0_4812_97ba_5d45826e35d4.bind(this)}>x</span>
            </div>
        );
    }

    onClick_edfa8f64_c0e0_4812_97ba_5d45826e35d4(event) {
        eventActions.hideModal();
    };
}
