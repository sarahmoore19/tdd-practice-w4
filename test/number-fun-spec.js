const chai = require("chai");
const { returnsThree, reciprocal } = require("../problems/number-fun");
const expect = chai.expect;

describe ("returnsThree", function () {
  it("should return the number 3", function () {
    expect(returnsThree()).to.equal(3);
  })
});

describe ("reciprocal", function () {

  it("should return the reciprocal of a number", function () {
    expect(reciprocal(7)).to.equal(1/7);
    expect(reciprocal(85.2)).to.equal(1/85.2);
  })

  it("should throw error for invalid input", function () {
    expect(() => reciprocal(-1)).to.throw();
    expect(() => reciprocal(1000001)).to.throw()
  })

});
