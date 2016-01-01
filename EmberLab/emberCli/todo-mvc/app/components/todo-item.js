import Ember from 'ember';

export default Ember.Component.extend({
  tagName: 'li',
  classNameBindings: ['editing'],
  editing: false,
  actions: {
    editTodo() {
      // Either of the followings will work
      this.toggleProperty('editing');
      //this.set('editing', true);

      // This won't work
      //this.editing = true;
    },
    submitTodo(){
      let todo = this.get('todoReceiver');
      console.log("deleting " + todo.get('title'));
      todo.get('title') === '' ?
        this.sendAction('deleteActionForTodoItem', todo):
        this.sendAction('updateActionForTodoItem', todo);

      this.toggleProperty('editing');
    },
    deleteTodo(){
      let todo = this.get('todoReceiver');
      this.sendAction('deleteActionForTodoItem', todo);
    }
  }
});
