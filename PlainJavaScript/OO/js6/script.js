'use strict';

function init(){

  var shelter = new Shelter();

  var cat = new Cat("blacky", "F", today(), "Redlands", null);
  var cat2 = new Cat("whitey", "F", today(), "Redlands", null);

  //cat.age = 5;
  //cat.meow();
  //cat.sleep();
  //console.log(cat._name);
};

function today(){
  return moment().format('LL');
};

