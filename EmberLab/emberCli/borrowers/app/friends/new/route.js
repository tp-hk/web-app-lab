import Ember from 'ember';

export default Ember.Route.extend({
  model(){
    return this.store.createRecord('friend');
  },
  resetController(controller, isExiting, transition){
    // A hook to reset controller values either
    // when model changes or route is exiting
    if(isExiting){
      console.log("resetController: isExiting");

      // remove uncommitted record
      var model = controller.get('model');
      if(model.get('isNew')){
        model.destroyRecord();
      }
    }
    console.log("resetController: isExiting = false");
  },
  // See bubbling in action
  actions:{
    save(){
      console.log("+-- save action in friends/new route");

      return true;  //this will make the action bubble
    },
    cancel(){
      console.log("+-- cancel action in friends/new route");

      return true;  //this will make the action bubble
    }
  }
});
