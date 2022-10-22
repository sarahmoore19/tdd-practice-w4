function myMap(inputArray, callback) {
  let newArr = [];
  inputArray.forEach((ele) => {
    newArr.push(callback(ele))
  })
  return newArr;
}


module.exports = myMap;
