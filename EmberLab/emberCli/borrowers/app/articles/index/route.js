import Ember from 'ember';

export default Ember.Route.extend({
  model() {
    let articles = this.modelFor('friends/show').get('articles');

		// friend's hasMany relationship with articles is now async
		// therefore a promise will be returned from modelFor
		if(articles.get('isFulfilled')){
				articles.reload();
		}

		return articles;
  },
  actions: {
    saveFromArticleIndexRoute(model){
      // console.log("saving article (route)");
      model.save();
      return false;
    }
  }
});
