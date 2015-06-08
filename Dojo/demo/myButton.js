define([
  "dojo/_base/declare",
  "dijit/form/Button"
], function(declare, Button){
  return declare("myButton.Button", Button, {
    label: "My Button",

    sayHi: function(){
      console.log("myButton.Button says hi");
    },

    onclick: function(evt){
      console.log("i am clicked");
      this.inherited(arguments);
    }
  });
});