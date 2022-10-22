class Triangle {
  constructor (side1, side2, side3) {
    this.side1 = side1;
    this.side2 = side2;
    this.side3 = side3;
  }

  getPerimeter() {
    return this.side1 + this.side2 + this.side3;
  }

  hasValidSideLengths() {
    if (this.side1 + this.side2 < this.side3) return false;
    if (this.side1 + this.side3 < this.side2) return false;
    if (this.side2 + this.side3 < this.side1) return false;
    return true;
  }

  validate() {
    this.hasValidSideLengths() ? this.isValid = true : this.isValid = false;
  }

  static getValidTriangles(...args) {
    let newArr = [];
    args.forEach((ele) => {
      if (ele.hasValidSideLengths()) newArr.push(ele);
    })
    return newArr;
  }


}

class Scalene extends Triangle {
  constructor (side1, side2, side3) {
    super(side1, side2, side3);
  }

  isScalene() {
    return this.side1 !== this.side2 && this.side1 !== this.side3 && this.side2 !== this.side3 ? true : false;
  }

  validate() {
    this.isScalene() ? this.isValidScalene = true : this.isValidScalene = false;
  }

}

class Isosceles extends Triangle {
  constructor (side1, side2, side3) {
    super(side1, side2, side3);
  }

  isIsosceles() {
    return this.side1 === this.side2 || this.side1 === this.side3 || this.side2 === this.side3 ? true : false;
  }

  validate() {
    this.isIsosceles() ? this.isValidIsosceles = true : this.isValidIsosceles = false;
  }
}

module.exports = {
    Triangle,
    Isosceles,
    Scalene
}
