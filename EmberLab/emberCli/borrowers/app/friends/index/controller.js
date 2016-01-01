import Ember from 'ember';

export default Ember.Controller.extend({
  queryParams: ['sortBy', 'sortAscending'],
  sortAscending: true,
  sortBy: 'firstName',
  actions:{
    setSortBy(fieldName){
      this.set('sortBy', fieldName);
      this.toggleProperty('sortAscending');

      return false;
    }
  }
});
