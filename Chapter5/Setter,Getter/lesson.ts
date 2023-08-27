class Person1 {
  private _age: number;
  public ﬁrstName: string;
  public lastName: string;
  constructor(_age: number, firstName: string, lastName: string) {
    this._age = _age;
    this.ﬁrstName = firstName;
    this.lastName = lastName;
  }
  //getter
  get age() {
    return this._age;
  } //aetter
  set age(age2: number) {
    if (age2 < 0 || age2 > 150) {
      throw new Error("loi");
    }
    this._age = age2;
  }
}

let person2 = new Person1(21, "phuc", "tien");

let checkAge = person2.age; //getter TS
console.log(checkAge);
// person2.age = 26; //setter
person2.age = 22; //setter TS
// person2.setAge(20); //setter
// console.log(person2.getAge()); //getter
console.log(person2);
