const chai = require("chai");
const expect = chai.expect;
const Person = require("../problems/person");
const ben = new Person("Ben", 30);
const jason = new Person("Jason", 27);
const obj1 = {name: "Jess", age: 23};
const obj2 = {name: "jess", height: 23};
let arr = [ben, jason]
let newArr = ["Hi Jess", "Hi Jason"]


describe("Person", function () {
  it("should take in and set a name and age property", function () {
    expect(ben.name).to.equal("Ben");
    expect(ben.age).to.equal(30);
  })

  it("sayHello() should return name and greeting message", function () {
    expect(ben.sayHello()).to.equal("Hi Ben");
  })

  it("visit(other) to return person visits other", function () {
    expect(ben.visit(jason)).to.equal("Ben visited Jason");
  })

  it("switchVisit(other) to return other visits person", function () {
    expect(ben.switchVisit(jason)).to.equal("Jason visited Ben");
  })

  it("replaces name/age with object name/age", function () {
    ben.update(obj1)
    expect(ben.name).to.equal("Jess");
    expect(ben.age).to.equal(23);
  })

  it("throws error if arg not object", function () {
    expect(() => ben.update(7)).to.throw();
  })

  it("throws error if object has no name/age property", function () {
    expect(() => ben.update(obj2)).to.throw();
  })

  it("tryUpdate(obj) returns false if update(obj) throws error, true otherwise", function () {
    expect(ben.tryUpdate(7)).to.equal(false);
    expect(ben.tryUpdate(obj1)).to.equal(true);
  })

  it("switchVisit(other) to return other visits person", function () {
    expect(Person.greetAll(arr)).to.deep.equal(newArr);
  })

})
