define([
    "dojo/_base/declare"
  ], function(declare){
  var A = declare(null, {
    // A few properties...
    propertyA: "Yes",
    propertyB: 2
  });

  var B = declare(A, {
    // A few properties...
    propertyA: "Maybe",
    propertyB: 1,
    propertyC: true
  });

  return declare("C", [A, B], {
    // A few properties...
    propertyA: "No",
    propertyB: 99,
    propertyD: false
  });
});