import Ember from 'ember';

export default Ember.Controller.extend({
  simpleProperty: 'New/Edit Person ',
  hasEmail: Ember.computed.notEmpty('model.email'),
  hasFirstName: Ember.computed.notEmpty('model.firstName'),
  hasLastName: Ember.computed.notEmpty('model.lastName'),
  hasTwitter: Ember.computed.notEmpty('model.twitter'),
  isValid: Ember.computed.and(
    'hasEmail',
    'hasFirstName',
    'hasLastName',
    'hasTwitter'
  ),
  actions: {
    save() {
      if(this.get('isValid')){
        this.get('model').save().then(friend=>{
          console.log("New/Edit controller: saving done. transitioning");
          this.transitionToRoute('friends.show', friend);
        });
      }
      else{
        this.set("errorMessage", "friends/base: Cannot saving new record/edits");
      }
      return false;
    },
    cancel(){
      // Edit and new will have different implementations
      // new: this.transitionToRoute('friends');
      // edit: this.transitionToRoute('friends.show', this.get('model'));

      // The following is the shared:
      return true;
    }
  }
});
