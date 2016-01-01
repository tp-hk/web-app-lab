import Ember from 'ember';

export default Ember.Route.extend({
  model(params){
    return this.store.findRecord('friend', params.friend_id);
  },
  actions:{
    startEditingFriend(model){
      // model.id can be passed directly from show.hbs to here as well
      console.log("opening editing page: " + model.id);
      this.transitionTo('friends.edit', model.id);
    },
    backToShowAllFriends(){
      this.transitionTo('friends');
    }
    // deletePerson(model){
    //   if(confirm('Sure to delete ' + model.get('fullName') + '?')){
    //     this.send('destroy', model);
    //   }
    // },
    // destroyPerson(model){
    //   model.destroyRecord().then(()=>{
    //     this.transitionTo('friends');
    //   })
    // }
  }
});
