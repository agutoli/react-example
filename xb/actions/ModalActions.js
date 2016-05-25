import alt from '../alt';

class ModalActions {

  constructor() {
    this.generateActions('hide');
  }

  show(content) {
      return { content };
  }
}

export default alt.createActions(ModalActions);
