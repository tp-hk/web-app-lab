import DS from 'ember-data';
import Ember from 'ember';

export default DS.Model.extend({
  firstName: DS.attr('string'),
  lastName: DS.attr('string'),
  email: DS.attr('string'),
  twitter: DS.attr('string'),
  totalArticles: DS.attr('number'),
  articles: DS.hasMany('article', {async: true}),
  fullName: Ember.computed({
    get(){
      let firstName = this.get('firstName');
      let lastName =  this.get('lastName');
      return firstName + " " + lastName;
    },
		set(key, value){
			// Setter is very rarely in computed properties
			// Ideally computed properties are read only
			var name = value.split(' ');
			this.set('firstName', name[0]);
			this.set('lastName', name[1]);
			
			return value;
		}
  })
});
