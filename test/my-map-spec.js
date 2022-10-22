const chai = require("chai");
const expect = chai.expect;
const spies = require("chai-spies");
chai.use(spies);
let myMap = require("../problems/my-map")

describe ("myMap", function () {

  const fn = (num) => num * 2;

  let arr = [0, 1, 2, 3, 4]

  beforeEach(() => {
  arr.push(arr[arr.length - 1] * 2)
  })

  it("should return an array with the callback invoked on each element", function () {
    let newArr = [0, 2, 4, 6, 8, 16]
    expect(myMap(arr, fn)).to.deep.equal(newArr);
  })

  it("should not mutate the original array", function () {
    let copy= [...arr]
    myMap(arr, fn);
    expect(arr).to.deep.equal(copy);
  })

  it("myMap does not call the Array.map method", function () {
    const spy = chai.spy.on(arr, 'map')
    myMap(arr, fn)
    expect(spy).to.not.have.been.called();
  })

  it("Callback is invoked once for each ele in array", function () {
    const spy = chai.spy(fn)
    myMap(arr, spy)
    expect(spy).to.have.been.called.exactly(arr.length);
  })

})
