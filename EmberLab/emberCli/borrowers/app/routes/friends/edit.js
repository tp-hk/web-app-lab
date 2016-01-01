import Ember from 'ember';

export default Ember.Route.extend({
  resetController(controller, isExiting, transition){
    if(isExiting){
      console.log("resetController: isExiting");

      // remove uncommitted record
      var model = controller.get('model');
      console.log("modelName " + model.get('modelName'));
      model.rollback();
    }
    console.log("resetController: isExiting = false");
  }
});
