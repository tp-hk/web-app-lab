export class Room{

  get roomName(){ return this._roomName; }
  set roomName(value){ this._roomName = value; }

  get cats(){ return this._cats; }
  set cats(value){ this._cats = value; }

  constructor(name){
    this.roomName = name;
    this.cats = [];
  }
}

export class Canteen extends Room{
  constructor(){
    super("canteen");
  }
}
export class Bathroom extends Room{
  constructor(){
    super("bathroom");
  }
}

export class Bedroom extends Room{
  constructor(){
    super("bedroom");
  }
}

export class MeetupRoom extends Room{
  constructor(){
    super("meetupRoom");
  }
}
export class CommonArea extends Room{
  constructor(){
    super("commonArea");
  }

  formGroup(){
    console.log(`common room has ${this.cats.length} cats`);
  }
}

let instance = null;
export class Shelter{
  static findRoom(roomName){
    return instance.rooms.find(function(element, index, array){
      if(element.constructor.name === roomName)
        return element;
    });
  }

  static get rooms(){
    return instance.rooms;
  }

  constructor(){
    if(!instance){
      instance = this;
    }

    //instance._name = "";
    instance.rooms = [ new Canteen(), new Bathroom(), new Bedroom(), new MeetupRoom(), new CommonArea()];

    return instance;
  }

  //static name(shelterName){
  //  if(instance._name === "")
  //    console.log("before: " + instance._name);
  //
  //  instance._name = shelterName;
  //  console.log("after: " + instance._name);
  //}

  static get canteen(){
    return instance.rooms[0];
  }

  static get bathroom(){
    return instance.rooms[1];
  }

  static get bedroom(){
    return instance.rooms[2];
  }

  static get meetupRoom(){
    return instance.rooms[3];
  }

  static get commonArea(){
    return instance.rooms[4];
  }
}