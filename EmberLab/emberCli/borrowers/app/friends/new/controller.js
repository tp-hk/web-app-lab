import FriendsBaseController from '../base-controller';

export default FriendsBaseController.extend({
  actions: {
    cancel() {
      this.transitionToRoute('friends');
      return false;
    }
  }
});
