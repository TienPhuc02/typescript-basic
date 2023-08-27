class Circle {
  static pi: number = 3.14;
  public test: number = 23;

  static calculateArea(radius: number) {
    return this.pi * radius * radius;
  }
}
Circle.pi; // returns 3.14 Circle.calculateArea(5);
console.log(Circle.pi); // trỏ đến static
console.log(Circle.calculateArea(20));
let t = new Circle();
console.log("Check pi ", t.test);
// t không trỏ đến static
