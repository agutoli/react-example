import alt from '../alt';
import ModalActions from '../actions/ModalActions'

class ModalStore {
    constructor() {
        this.bindListeners({
            show: ModalActions.SHOW,
            hide: ModalActions.HIDE
        });

        this.state = {
            visible: false
        };
    }

    show() {
        this.setState({ visible: true });
    }

    hide() {
        this.setState({ visible: false });
    }
}

export default alt.createStore(ModalStore, 'ModalStore');
