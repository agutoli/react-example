import alt from '../alt';
import ModalActions from '../actions/ModalActions'

class ModalStore {
    constructor() {
        this.bindListeners({
            show: ModalActions.SHOW,
            hide: ModalActions.HIDE
        });

        this.state = {
            content:  '',
            visible: false
        };
    }

    show(opts) {
        this.setState({ visible: true, content: opts.content });
    }

    hide() {
        this.setState({ visible: false });
    }
}

export default alt.createStore(ModalStore, 'ModalStore');
