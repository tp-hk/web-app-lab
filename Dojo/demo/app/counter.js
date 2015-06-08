////The module's value is the number 2
//define(2);
//
////The module's value is an object
//define({
//  library: 'dojo',
//  version: '1.10'
//});

//The module's value is the result from the function (stored by the loader)
//call define() to register a module with the loader
define([
    "dojo/_base/declare"
  ],
  function(declare){
    var privateValue = 6172;

    return {
      increment: function(){
        privateValue++;
      },

      decrement: function(){
        privateValue--;
      },

      getValue: function(){
        return privateValue;
      }
    };
  });