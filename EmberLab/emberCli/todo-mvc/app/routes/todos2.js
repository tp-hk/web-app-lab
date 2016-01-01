import Ember from 'ember';

export default Ember.Route.extend({
  model(){
    return this.store.findAll('todo');
  },
  actions: {
    createTodo(newTitle){
      this.store.createRecord('todo', {
        title: newTitle,
        complete: false
      }).save();
    },
    updateTodo(todo){
      console.log("*** updating ***");
      todo.save();
    },
    deleteTodo(todo) {
      console.log("*** deleting ***" + todo.get('title'));
      todo.destroyRecord();
    }
  }
});
