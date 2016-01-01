import Ember from 'ember';

export default Ember.Component.extend({
  remaining: Ember.computed('todos.@each.complete', function(){

  }),
  inflection: Ember.computed('remaining', function(){

  })
});
