"use strict";

// 208. constructor functions and the new operator

// constructor function
const Person = function (firstName, birthYear) {
  this.firstName = firstName;
  this.birthYear = birthYear;

  // method
  this.calcAge = function () {
    console.log(2023 - this.birthYear);
  };
};

// object
const anshu = new Person("Anshu", 2003);
console.log(anshu);
anshu.calcAge();
console.log(anshu instanceof Person);
