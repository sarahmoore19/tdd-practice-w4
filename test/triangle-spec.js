const chai = require("chai");
const expect = chai.expect;
const { Triangle, Isosceles, Scalene } = require("../problems/triangle");
const triangle = new Triangle(3, 4, 4);
const notTriangle = new Triangle(1, 2, 4);
const scalene = new Scalene(3, 4, 5);
const notScalene = new Scalene(3, 4, 4);
const isosceles = new Isosceles(3, 4, 4);
const notIsosceles = new Isosceles(3, 4, 5);


describe("Triangle", function () {
  it("should take in and initialize 3 side lengths", function () {
    expect(triangle.side1).to.equal(3);
    expect(triangle.side2).to.equal(4);
    expect(triangle.side3).to.equal(4);
  })

  it("should return perimeter", function () {
    expect(triangle.getPerimeter()).to.equal(11);
  })

  it("should return true if valid trangle, false otherwise", function () {
    expect(triangle.hasValidSideLengths()).to.equal(true);
    expect(notTriangle.hasValidSideLengths()).to.equal(false);
  })

  it("should set isValid property to true or false", function () {
    triangle.validate();
    notTriangle.validate();
    expect(triangle.isValid).to.equal(true);
    expect(notTriangle.isValid).to.equal(false);
  })

  it("should return perimeter", function () {
    expect(Triangle.getValidTriangles(triangle, notTriangle)).to.deep.equal([triangle]);
  })
});


describe("Scalene", function () {
  it("should take in and initialize 3 side lengths", function () {
    expect(scalene.side1).to.equal(3);
    expect(scalene.side2).to.equal(4);
    expect(scalene.side3).to.equal(5);
  })

  it("should return true if valid scalene triangle, false otherwise", function () {
    expect(scalene.isScalene()).to.equal(true);
    expect(notScalene.isScalene()).to.equal(false);
  })

  it("should set isScalene property to true or false", function () {
    scalene.validate();
    notScalene.validate();
    expect(scalene.isValidScalene).to.equal(true);
    expect(notScalene.isValidScalene).to.equal(false);
  })

});


describe("isoceles", function () {
  it("should take in and initialize 3 side lengths", function () {
    expect(isosceles.side1).to.equal(3);
    expect(isosceles.side2).to.equal(4);
    expect(isosceles.side3).to.equal(4);
  })

  it("should return true if valid isosceles triangle, false otherwise", function () {
    expect(isosceles.isIsosceles()).to.equal(true);
    expect(notIsosceles.isIsosceles()).to.equal(false);
  })

  it("should set isValid property to true of false", function () {
    isosceles.validate();
    notIsosceles.validate();
    expect(isosceles.isValidIsosceles).to.equal(true);
    expect(notIsosceles.isValidIsosceles).to.equal(false);
  })

});
