/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};

/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {

/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;

/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};

/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);

/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;

/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}


/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;

/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;

/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";

/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var _Cat = __webpack_require__(1);

	var _Shelter = __webpack_require__(2);

	var shelter = new _Shelter.Shelter();

	var cat = new _Cat.Cat("blacky", "F", new Date(), "Redlands", null);
	var cat2 = new _Cat.Cat("whitey", "F", new Date(), "Redlands", null);

/***/ },
/* 1 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.Cat = undefined;

	var _Shelter = __webpack_require__(2);

	var _Utils = __webpack_require__(3);

	var utils = _interopRequireWildcard(_Utils);

	function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	var Cat = exports.Cat = function () {
	  _createClass(Cat, [{
	    key: 'name',

	    /**
	     * Properties
	     **/
	    get: function get() {
	      return this._name;
	    }
	  }, {
	    key: 'size',
	    get: function get() {
	      return this._size;
	    },
	    set: function set(value) {
	      this._size = value;
	    }
	  }, {
	    key: 'isVocal',
	    get: function get() {
	      return this._isVocal;
	    },
	    set: function set(value) {
	      this._isVocal = value;
	    }
	  }, {
	    key: 'isSociable',
	    get: function get() {
	      return this._isSociable;
	    },
	    set: function set(value) {
	      this._isSociable = value;
	    }
	  }, {
	    key: 'age',
	    get: function get() {
	      return this[ageSymbol];
	      //return this._age;
	    },
	    set: function set(value) {
	      //this[ageSymbol] = value > 0 ? value: 0.5;
	      //this._age = value;
	    }
	  }, {
	    key: 'gender',
	    get: function get() {
	      return this._gender;
	    }
	  }, {
	    key: 'imgs',
	    get: function get() {
	      return this._imgs;
	    },
	    set: function set(value) {
	      this._imgs = value;
	    }
	  }, {
	    key: 'foundOn',
	    get: function get() {
	      return this._foundOn;
	    }
	  }, {
	    key: 'foundAt',
	    get: function get() {
	      return this._foundAt;
	    }
	  }, {
	    key: 'state',
	    get: function get() {
	      return this._state;
	    },
	    set: function set(value) {
	      this._state = value;
	    }
	  }, {
	    key: 'isHungry',
	    get: function get() {
	      return this._isHungry;
	    },
	    set: function set(value) {
	      this._isHungry = value;
	    }
	  }, {
	    key: 'isSick',
	    get: function get() {
	      return this._isSick;
	    },
	    set: function set(value) {
	      this._isSick = value;
	    }
	  }, {
	    key: 'needsPlay',
	    get: function get() {
	      return this._needsPlay;
	    },
	    set: function set(value) {
	      this._needsPlay = value;
	    }
	  }, {
	    key: 'mom',
	    get: function get() {
	      return this._mom;
	    },
	    set: function set(value) {
	      this._mom = value;
	    }
	  }, {
	    key: 'friends',
	    get: function get() {
	      return this._friends;
	    },
	    set: function set(value) {
	      this._friends = value;
	    }
	  }, {
	    key: 'vaccinationDueOn',
	    get: function get() {
	      return this._vaccinationDueOn;
	    },
	    set: function set(value) {
	      this._vaccinationDueOn = value;
	    }
	  }, {
	    key: 'healthRecords',
	    get: function get() {
	      return this._healthRecords;
	    },
	    set: function set(value) {
	      this._healthRecords = value;
	    }
	  }, {
	    key: 'adoptors',
	    get: function get() {
	      return this._adoptors;
	    },
	    set: function set(value) {
	      this._adoptors = value;
	    }
	  }, {
	    key: 'diedOn',
	    get: function get() {
	      return this._diedOn;
	    },
	    set: function set(value) {
	      this._diedOn = value;
	    }

	    /**
	     * Methods
	     **/

	  }], [{
	    key: 'States',

	    // getter method for class (static) property
	    get: function get() {
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
	  }]);

	  function Cat(name, gender, foundOn, foundAt, imgs, size) {
	    var _this = this;

	    _classCallCheck(this, Cat);

	    this._name = name;
	    this._gender = gender;
	    this._foundOn = foundOn;
	    this._foundAt = foundAt;
	    this._imgs = imgs;
	    this._size = size;
	    this._state = Cat.States.ROAMING;

	    this.move("CommonArea");

	    //increase sleep interval if age <=2
	    setInterval(function () {
	      _this.sleep();
	    }, 10000);

	    setInterval(function () {
	      _this.hide();
	    }, utils.random(24000, 48000));

	    setInterval(function () {
	      _this.formGroup();
	    }, utils.random(5000, 6000));

	    //Shelter.name("***" + this.name);
	  }

	  _createClass(Cat, [{
	    key: 'sleep',
	    value: function sleep() {
	      if (this.state !== Cat.States.HIDING && this.state !== Cat.States.ROAMING) return;

	      // increase sleep time if age <=2
	      this._changeState(Cat.States.SLEEPING, Cat.States.ROAMING, 8000);
	    }
	  }, {
	    key: 'hide',
	    value: function hide() {
	      if (this.state !== Cat.States.ROAMING) return;

	      var hideDuration = 1000;
	      if (!this.isSociable) hideDuration *= 2;

	      console.log(this.name + ' will hide for ' + hideDuration);
	      this._changeState(Cat.States.HIDING, Cat.States.ROAMING, hideDuration);
	    }

	    // computed method name

	  }, {
	    key: 'me' + 'ow',
	    value: function value() {
	      if (this.state === Cat.States.SLEEPING || this.state === Cat.States.HIDING) return;

	      console.log(this.name + ' meows');
	    }
	  }, {
	    key: 'move',
	    value: function move(roomName) {
	      if (this.currentRoom) {
	        var index = this.currentRoom.cats.indexOf(this);
	        if (index > -1) this.currentRoom.cats.splice(index, 1);
	      }

	      this.currentRoom = _Shelter.Shelter.findRoom(roomName);
	      this.currentRoom.cats.push(this);
	      console.log(this.name + ' is at ' + this.currentRoom.roomName);
	    }
	  }, {
	    key: 'formGroup',
	    value: function formGroup() {
	      //var cats = Shelter.findRoom("CommonArea").cats;
	      //console.log(`${cats.length} cats in commonArea`);

	      var room = _Shelter.Shelter.commonArea;
	      room.formGroup();

	      // if cat count <=4, form 1 group. If > 4 cats, break down into groups

	      // within each group, either play or fight

	      // if play, cat becomes social

	      // if fight, cat becomes vocal
	    }

	    // Private functions

	  }, {
	    key: '_changeState',
	    value: function _changeState(fromState, toState, duration) {
	      var _this2 = this;

	      this.state = fromState;
	      console.log(this.name + ' is ' + this.state);

	      setTimeout(function () {
	        _this2.state = toState;
	        console.log(_this2.name + ' is ' + _this2.state);
	      }, duration);
	    }
	  }]);

	  return Cat;
	}();

/***/ },
/* 2 */
/***/ function(module, exports) {

	"use strict";

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	var Room = exports.Room = function () {
	  _createClass(Room, [{
	    key: "roomName",
	    get: function get() {
	      return this._roomName;
	    },
	    set: function set(value) {
	      this._roomName = value;
	    }
	  }, {
	    key: "cats",
	    get: function get() {
	      return this._cats;
	    },
	    set: function set(value) {
	      this._cats = value;
	    }
	  }]);

	  function Room(name) {
	    _classCallCheck(this, Room);

	    this.roomName = name;
	    this.cats = [];
	  }

	  return Room;
	}();

	var Canteen = exports.Canteen = function (_Room) {
	  _inherits(Canteen, _Room);

	  function Canteen() {
	    _classCallCheck(this, Canteen);

	    return _possibleConstructorReturn(this, Object.getPrototypeOf(Canteen).call(this, "canteen"));
	  }

	  return Canteen;
	}(Room);

	var Bathroom = exports.Bathroom = function (_Room2) {
	  _inherits(Bathroom, _Room2);

	  function Bathroom() {
	    _classCallCheck(this, Bathroom);

	    return _possibleConstructorReturn(this, Object.getPrototypeOf(Bathroom).call(this, "bathroom"));
	  }

	  return Bathroom;
	}(Room);

	var Bedroom = exports.Bedroom = function (_Room3) {
	  _inherits(Bedroom, _Room3);

	  function Bedroom() {
	    _classCallCheck(this, Bedroom);

	    return _possibleConstructorReturn(this, Object.getPrototypeOf(Bedroom).call(this, "bedroom"));
	  }

	  return Bedroom;
	}(Room);

	var MeetupRoom = exports.MeetupRoom = function (_Room4) {
	  _inherits(MeetupRoom, _Room4);

	  function MeetupRoom() {
	    _classCallCheck(this, MeetupRoom);

	    return _possibleConstructorReturn(this, Object.getPrototypeOf(MeetupRoom).call(this, "meetupRoom"));
	  }

	  return MeetupRoom;
	}(Room);

	var CommonArea = exports.CommonArea = function (_Room5) {
	  _inherits(CommonArea, _Room5);

	  function CommonArea() {
	    _classCallCheck(this, CommonArea);

	    return _possibleConstructorReturn(this, Object.getPrototypeOf(CommonArea).call(this, "commonArea"));
	  }

	  _createClass(CommonArea, [{
	    key: "formGroup",
	    value: function formGroup() {
	      console.log("common room has " + this.cats.length + " cats");
	    }
	  }]);

	  return CommonArea;
	}(Room);

	var instance = null;

	var Shelter = exports.Shelter = function () {
	  _createClass(Shelter, null, [{
	    key: "findRoom",
	    value: function findRoom(roomName) {
	      return instance.rooms.find(function (element, index, array) {
	        if (element.constructor.name === roomName) return element;
	      });
	    }
	  }, {
	    key: "rooms",
	    get: function get() {
	      return instance.rooms;
	    }
	  }]);

	  function Shelter() {
	    _classCallCheck(this, Shelter);

	    if (!instance) {
	      instance = this;
	    }

	    //instance._name = "";
	    instance.rooms = [new Canteen(), new Bathroom(), new Bedroom(), new MeetupRoom(), new CommonArea()];

	    return instance;
	  }

	  //static name(shelterName){
	  //  if(instance._name === "")
	  //    console.log("before: " + instance._name);
	  //
	  //  instance._name = shelterName;
	  //  console.log("after: " + instance._name);
	  //}

	  _createClass(Shelter, null, [{
	    key: "canteen",
	    get: function get() {
	      return instance.rooms[0];
	    }
	  }, {
	    key: "bathroom",
	    get: function get() {
	      return instance.rooms[1];
	    }
	  }, {
	    key: "bedroom",
	    get: function get() {
	      return instance.rooms[2];
	    }
	  }, {
	    key: "meetupRoom",
	    get: function get() {
	      return instance.rooms[3];
	    }
	  }, {
	    key: "commonArea",
	    get: function get() {
	      return instance.rooms[4];
	    }
	  }]);

	  return Shelter;
	}();

/***/ },
/* 3 */
/***/ function(module, exports) {

	"use strict";

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.random = random;
	function random(min, max) {
	  return Math.floor(Math.random() * (max - min + 1)) + min;
	}

/***/ }
/******/ ]);