import Ember from 'ember';

export default Ember.Controller.extend({
  isValid: Ember.computed({
    get(){
      return !Ember.isEmpty(this.get('model.description'));
    }
  }),
  actions:{
    save(){
      if(this.get('isValid')){
        // var model = this.modelFor('articles/new');
        // model.save().then(()=>{
        //   this.transitionTo('articles');
        // });
        return true;
      }
      else{
        this.set('errorMsg', 'articles/new: Cannot saving new article');
        return false;
      }

    },
    cancel(){
      this.transitionTo('articles');
      return false;
    }
  }
});
