'use strict';

class Utils{
  static random(min, max){

    //let sh1 = new Shelter("sh1");
    //console.log("utils: " + sh1.name);
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }
}