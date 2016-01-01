import Ember from 'ember';

export default Ember.Route.extend({
  queryParams: {
    sortBy:{
      refreshModel: true
    },
    sortAscending:{
      refreshModel: true
    }
  },
  model(queryParams){
    return this.store.query('friend', queryParams);
    //return this.store.findAll('friend');
    // return this.store.findRecord('friend', 1)
    // return this.store.queryRecord('friend', {first_name: 'Lucie'})
  }
  // actions:{
  //   deletePerson(model){
  //     if(confirm('Sure to delete ' + model.get('fullName') + '?')){
  //       this.send('destroy', model);
  //     }
  //   },
  //   destroyPerson(model){
  //     // destroyRecord will delete the record from server
  //     // deleteRecord only delete the record locally
  //     model.destroyRecord();
  //     return false;
  //   }
  // }
});
