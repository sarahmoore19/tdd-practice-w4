const chai = require("chai");
const expect = chai.expect;
let reverseString = require("../problems/reverse-string")

describe("reverseString", function () {

  it("should return the argument string, reversed", function () {
    expect(reverseString("fun")).to.equal("nuf");
  });

  it("should throw an error if argument is not a string", function () {
    expect(() => reverseString(7)).to.throw();
  });

});
