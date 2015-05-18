function runScript(){
  //http://javascriptissexy.com/javascript-prototype-in-plain-detailed-language/
  //inheritance with simple objects
  inheritanceWithSimpleObjects();

  ////http://javascriptissexy.com/oop-in-javascript-what-you-need-to-know/
  //some inheritance patterns:
  //constructor, prototype, a mix of both
  //parasite combination inheritance
  inheritancePatterns();

  //http://javascriptissexy.com/oop-in-javascript-what-you-need-to-know/
  //Use the Quiz object to create quiz questions and a user
  //*** a failed attempt ***
  Quiz();
}

function inheritanceWithSimpleObjects(){
  //Explore object with inheritance
  console.log("plant speaking...");
  var genericPlant = new Plant("Taiwan", true, "Green");
  genericPlant.showOriginAndColor();
  genericPlant.isOrganic();

  console.log("Mango speaking...");
  var mangoPlant = new Fruit("Mango", "Philippines", false, "Yellow");
  mangoPlant.showName();
  mangoPlant.showOriginAndColor();
  genericPlant.isOrganic();
}

function inheritancePatterns(){
  //create an object using Prototype Pattern
  createByPrototypePattern();

  //create an object using Constructor Pattern
  createByConstructorPattern();

  //Create an object by doing Object create
  createByObjectCreate();

  //Create By Parasite Combination Inheritance pattern
  createByParasiteCombinationInheritance();
}

function createByConstructorPattern(){
  function EmployeeCtor(firstName, lastName){
    this.firstName = firstName;
    this.lastName = lastName;
    this.fullName = function(){
      return this.firstName + " " + this.lastName;
    };
  }

  var emp6493 = new EmployeeCtor("T6493", "Ctor");
  console.log(emp6493.fullName());
}

function createByPrototypePattern(){
  function Employee(firstName, lastName){
    Employee.prototype.firstName = firstName;
    Employee.prototype.lastName = lastName;
    Employee.prototype.startDate = new Date();
    Employee.prototype.fullName = function(){
      return this.firstName + " " + this.lastName;
    };
  }

  var emp6492 = new Employee("T6492", "Prototype");
  console.log(emp6492.fullName());
}

function createByObjectCreate(){
  var cars = {
    wheels: 4,
    year:20115
  };

  //use Object.create to copy properties of parent to child
  //i.e. cars into toyota
  var toyota = Object.create(cars);
  console.log(toyota.type + ", " + toyota.wheels + ", " + toyota.year);
}

function createByParasiteCombinationInheritance(){
  var child = function(){
    this.type = "child"
  };
  var parent = function(){
    this.type = "parent"
  };
  inheritPrototype(child, parent);
}

function inheritPrototype(childO, parentO){
  //Create a copyOfParent object of type of parentO
  //copyOfParent now has everything from parentO
  var copyOfParent = Object.create(parentO.prototype);

  //Make childO inherits from copyOfParent
  //It copies everything, including constructor
  //which is parent()
  childO.prototype = copyOfParent;

  //Hence the last step is to set back childO's constructor to child()
  childO.prototype.constructor = childO;
}
