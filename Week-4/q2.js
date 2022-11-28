var Person = function () {};
Person.prototype.initialize = function (name, age) {
  this.name = name;
  this.age = age;
  this.getDetails = () => {
    console.log(`${this.name} ${this.age}`);
  };
};

var Teacher = function (...args) {
  Person.apply(this, args);
  this.teach = (subject) => {
    console.log(`${this.name} is now teaching ${subject}`);
  };
};

Teacher.prototype = Object.create(Person.prototype);

var him = new Teacher();
him.initialize("Adam", 45);
him.teach("Inheritance");
