import Ember from 'ember';

export default Ember.Component.extend({
  actions: {
    submitTodo(newTitle){
      if(newTitle)
        this.sendAction('actionForTodoInput', newTitle);

      this.set('newTitle', '');
    }
  }
});
