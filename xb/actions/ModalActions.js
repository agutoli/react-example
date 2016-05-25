import alt from '../alt';

class ModalActions {
  constructor() {
    this.generateActions('show');
    this.generateActions('hide');
  }
}

export default alt.createActions(ModalActions);
