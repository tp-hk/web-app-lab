import {Shelter} from './Shelter';
import * as utils from './Utils';

export class Cat {
  // getter method for class (static) property
  static get States() {
    return {
      ROAMING: "roaming",
      SLEEPING: "sleeping",
      HIDING: "hiding",
      EATING: "eating",
      SEEINGVET: "seeingVet",
      PLAYING: "playing",
      USINGBATHROOM: "usingBathroom",
      MEETINGADOPTOR: "meetingAdoptor"
    };
  }

  /**
   * Properties
   **/
  get name() {
    return this._name;
  }

  get size() {
    return this._size;
  }

  set size(value) {
    this._size = value;
  }

  get isVocal() {
    return this._isVocal;
  }

  set isVocal(value) {
    this._isVocal = value;
  }

  get isSociable() {
    return this._isSociable;
  }

  set isSociable(value) {
    this._isSociable = value;
  }

  get age() {
    return this[ageSymbol];
    //return this._age;
  }

  set age(value) {
    //this[ageSymbol] = value > 0 ? value: 0.5;
    //this._age = value;
  }

  get gender() {
    return this._gender;
  }

  get imgs() {
    return this._imgs;
  }

  set imgs(value) {
    this._imgs = value;
  }

  get foundOn() {
    return this._foundOn;
  }

  get foundAt() {
    return this._foundAt;
  }

  get state() {
    return this._state;
  }

  set state(value) {
    this._state = value;
  }

  get isHungry() {
    return this._isHungry;
  }

  set isHungry(value) {
    this._isHungry = value;
  }

  get isSick() {
    return this._isSick;
  }

  set isSick(value) {
    this._isSick = value;
  }

  get needsPlay() {
    return this._needsPlay;
  }

  set needsPlay(value) {
    this._needsPlay = value;
  }

  get mom() {
    return this._mom;
  }

  set mom(value) {
    this._mom = value;
  }

  get friends() {
    return this._friends;
  }

  set friends(value) {
    this._friends = value;
  }

  get vaccinationDueOn() {
    return this._vaccinationDueOn;
  }

  set vaccinationDueOn(value) {
    this._vaccinationDueOn = value;
  }

  get healthRecords() {
    return this._healthRecords;
  }

  set healthRecords(value) {
    this._healthRecords = value;
  }

  get adoptors() {
    return this._adoptors;
  }

  set adoptors(value) {
    this._adoptors = value;
  }

  get diedOn() {
    return this._diedOn;
  }

  set diedOn(value) {
    this._diedOn = value;
  }

  /**
   * Methods
   **/
  constructor(name, gender, foundOn, foundAt, imgs, size) {
    this._name = name;
    this._gender = gender;
    this._foundOn = foundOn;
    this._foundAt = foundAt;
    this._imgs = imgs;
    this._size = size;
    this._state = Cat.States.ROAMING;

    this.move("CommonArea");

    //increase sleep interval if age <=2
    setInterval(()=> {
      this.sleep();
    }, 10000);

    setInterval(()=> {
      this.hide();
    }, utils.random(24000, 48000));

    setInterval(()=> {
      this.formGroup();
    }, utils.random(5000, 6000));

    //Shelter.name("***" + this.name);
  }

  sleep() {
    if (this.state !== Cat.States.HIDING &&
      this.state !== Cat.States.ROAMING)
      return;

    // increase sleep time if age <=2
    this._changeState(Cat.States.SLEEPING, Cat.States.ROAMING, 8000);

  }

  hide() {
    if (this.state !== Cat.States.ROAMING)
      return;

    var hideDuration = 1000;
    if (!this.isSociable)
      hideDuration *= 2;

    console.log(`${this.name} will hide for ${hideDuration}`);
    this._changeState(Cat.States.HIDING, Cat.States.ROAMING, hideDuration);
  }

  // computed method name
  ['me' + 'ow']() {
    if (this.state === Cat.States.SLEEPING ||
      this.state === Cat.States.HIDING)
      return;

    console.log(`${this.name} meows`);
  }

  move(roomName) {
    if (this.currentRoom) {
      var index = this.currentRoom.cats.indexOf(this);
      if (index > -1)
        this.currentRoom.cats.splice(index, 1);
    }

    this.currentRoom = Shelter.findRoom(roomName);
    this.currentRoom.cats.push(this);
    console.log(`${this.name} is at ${this.currentRoom.roomName}`);
  }

  formGroup() {
    //var cats = Shelter.findRoom("CommonArea").cats;
    //console.log(`${cats.length} cats in commonArea`);

    var room = Shelter.commonArea;
    room.formGroup();

    // if cat count <=4, form 1 group. If > 4 cats, break down into groups

    // within each group, either play or fight

    // if play, cat becomes social

    // if fight, cat becomes vocal

  }

  // Private functions
  _changeState(fromState, toState, duration) {
    this.state = fromState;
    console.log(`${this.name} is ${this.state}`);

    setTimeout(()=> {
      this.state = toState;
      console.log(`${this.name} is ${this.state}`)
    }, duration);
  }
}
