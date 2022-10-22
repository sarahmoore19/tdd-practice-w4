class Person {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }

  sayHello() {
    return `Hi ${this.name}`;
  }

  visit(otherPerson) {
    return `${this.name} visited ${otherPerson.name}`
  }

  switchVisit(otherPerson) {
    return otherPerson.visit(this);
  }

  update(obj) {
    if (typeof obj !== "object") throw new Error("Invalid Entry");
    if (obj.name === undefined) throw new Error("name is undefined");
    if (obj.age === undefined) throw new Error("age is undefined");
    this.name = obj.name;
    this.age = obj.age;
  }

  tryUpdate(obj) {
   try {
    this.update(obj)
   }
   catch(e) {
    return false;
   }
   return true;
  }

  static greetAll(arr) {
    let newArr = [];
    arr.forEach((ele) => {
      newArr.push(ele.sayHello())
    })
    return newArr;
  }
}


module.exports = Person;
