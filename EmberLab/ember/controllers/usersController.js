App.UserController = Ember.ArrayController.extend({
	sortProperties:['name'],
	sortAscending:true,
	userCount:function(){
		return this.get('mode.length');
	}.property('@each')	
});
