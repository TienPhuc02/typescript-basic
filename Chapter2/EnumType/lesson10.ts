//enum là nhóm các giá trị hằng số
enum API_STATUS {
  PENDING = "PENDING",
  FULFILLED = "FULFILLED",
  REJECTED = "REJECTED",
  RESOLVE = "RESOLVE",
}
//không khởi tạo giá trị thì nó in ra index, còn khởi tạo giá trị thì nó ra giá trị
let a = API_STATUS.FULFILLED; //1
let a1 = API_STATUS.REJECTED; //2
console.log("a=", a, "a1=", a1);
///index
//frontend :syntax
export enum Directions {
  Up = "UP",
  Down = "DOWN",
  Left = "LEFT",
}
function doSomething(l: Directions) {}
// doSomething("foo");
// doSomething("UP")
doSomething(Directions.Down);
