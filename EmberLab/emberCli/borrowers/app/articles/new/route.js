import Ember from 'ember';

export default Ember.Route.extend({
  // simpleProperty: "New/Edit Article",
  model(){
    return this.store.createRecord('article', {
      friend: this.modelFor('friends/show')
    });
  },
  resetController(controller, isExiting, transition){
    if(isExiting){
      console.log('exiting');

      var model = controller.get('model');
      if(model.get('isNew'))
        model.destroyRecord();
    }
  },
  actions:{
    save(){
      var model = this.modelFor('articles/new');
      model.save().then(()=>{
        this.transitionTo('articles');
      });
    }
    // cancel(){
    //   this.transitionTo('articles');
    // }
  }
});
