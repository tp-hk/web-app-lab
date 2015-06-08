define([
  'dojo/dom',
  'dojo/fx',
  'dojo/domReady!'
], function(dom, fx){
  var oldText = {};

  return{
    setText: function(id, text){
      var node = dom.byId(id);
      oldText[id] = node.innerHTML;
      node.innerHTML = text;

      this.animateText(node);
    },

    restoreText: function(id){
      var node = dom.byId(id);
      node.innerHTML = oldText[id];
      delete oldText[id];
    },

    animateText: function(node){
      fx.slideTo({
        node: node,
        top: 100,
        left: 200
      }).play();
    }
  };
});