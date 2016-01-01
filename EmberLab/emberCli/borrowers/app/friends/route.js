import Ember from 'ember';

export default Ember.Route.extend({
  // See bubbling in action
  actions:{
    save(){
      console.log("+--- save action in friends route");

      return true;  //this will make the action bubble
    },
    cancel(){
      console.log("+--- cancel action in friends route");

      return true;  //this will make the action bubble
    },
    deletePerson(model){
      if(confirm('Sure to delete ' + model.get('fullName') + '?')){
        this.send('destroyPerson', model);
      }
    },
    destroyPerson(model){
      // destroyRecord will delete the record from server
      // deleteRecord only delete the record locally
      model.destroyRecord().then(()=>{
        this.transitionTo('friends');
      });
    }
  }
});
