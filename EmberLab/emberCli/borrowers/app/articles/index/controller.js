import Ember from 'ember';

export default Ember.Controller.extend({
  //queryParams: ['showReturned'],
  //showReturned: false,
  actions: {
    //setFilter(){
    //  this.toggleProperty('showReturned');
    //
    //  return false;
    //}
  },
  // this var must be declared here and NOT articles/index route or article/article-row component
  // TODO: WHY??
  possibleStates: ['borrowed', 'returned']
});
