'use strict';

class Room{

  get roomName(){ return this._roomName; }
  set roomName(value){ this._roomName = value; }

  get cats(){ return this._cats; }
  set cats(value){ this._cats = value; }

  constructor(name){
    this.roomName = name;
    this.cats = [];
  }
}

class Canteen extends Room{
  constructor(){
    super("canteen");
  }
}
class Bathroom extends Room{
  constructor(){
    super("bathroom");
  }
}
class Bedroom extends Room{
  constructor(){
    super("bedroom");
  }}
class MeetupRoom extends Room{
  constructor(){
    super("meetupRoom");
  }
}
class CommonArea extends Room{
  constructor(){
    super("commonArea");
  }}

let instance = null;
class Shelter{
  static findRoom(roomName){
    return instance.rooms.find(function(element, index, array){
      if(element.constructor.name === roomName)
        return element;
    });
  }

  static get rooms(){
    return instance.rooms;
  }

  //static name(shelterName){
  //  if(instance._name === "")
  //    console.log("before: " + instance._name);
  //
  //  instance._name = shelterName;
  //  console.log("after: " + instance._name);
  //}

  constructor(){
    if(!instance){
      instance = this;
    }

    //instance._name = "";
    instance.rooms = [ new Canteen(), new Bathroom(), new Bedroom(), new MeetupRoom(), new CommonArea()];

    return instance;
  }
}