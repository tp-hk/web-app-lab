import Ember from 'ember';
import config from './config/environment';

const Router = Ember.Router.extend({
  location: config.locationType
});

Router.map(function() {
  this.route('friends', function(){
    this.route('new');

    this.route('show', {path: ':friend_id'}, function(){
      // If "resetNamespace: true" is not added, Ember will combines the routes' names
      // to form the final route path i.e.
      // friends/show/articles
      // But in this case, the following is expected
      // friends/<friend_id>/articles
      this.route('articles', {resetNamespace: true}, function(){
        this.route('new');
      });
    });

    this.route('edit', {path: ':friend_id/edit'});
  });
});

export default Router;
