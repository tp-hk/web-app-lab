export default Ember.Route.extend({
  actions: {
    save() {
      console.log('+---- save action bubbled up to application route');
      return true;  // bubbling stops here
    },
    cancel() {
      console.log('+---- cancel action bubbled up to application route');
      return true;
    }
  }
});
