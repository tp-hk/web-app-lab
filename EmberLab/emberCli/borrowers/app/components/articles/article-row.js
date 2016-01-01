import Ember from 'ember';

export default Ember.Component.extend({
  tagName: 'tr',
  article: null,
  articleStates: null,
	statusMessage: '',
	stateChanged: Ember.observer('article.state', function(){
		var article = this.get('article');
		this.set('statusMessage', article.get('state'))
	}),
  actions: {
    saveArticle(){
      // console.log("saving article (component)");

      let article = this.get('article');
      if(article.get('hasDirtyAttributes')){
        this.sendAction('saveFromArticleRowComponent', article);
      }        
    }
  }
});
