// class Person3 {
//   firstName: string;
//   lastName: string;

//   constructor(ﬁrstName: string, lastName: string) {
//     this.ﬁrstName = ﬁrstName;
//     this.lastName = lastName;
//   }
//   getFullName(): string {
//     return `${this.ﬁrstName} ${this.lastName}`;
//   }
//   describe(): string {
//     return `This is ${this.ﬁrstName} ${this.lastName}.`;
//   }
// }
class Person3 {
  firstName: string;
  lastName: string;

  constructor(firstName: string, lastName: string) {
    this.firstName = firstName;
    this.lastName = lastName;
  }

  getFullName(): string {
    return `${this.firstName} ${this.lastName}`;
  }
  //overwirte
  describe(): string {
    return `This is ${this.firstName} ${this.lastName}.`;
  }
}
//để kế thừa 1 class, chúng ta sử dụng keyword extends

class Employee3 extends Person3 {
  private jobTitle;
  constructor(ﬁrstName: string, lastName: string, jobTitle: string) {
    // call the constructor of the Person class:
    super(ﬁrstName, lastName);
    this.jobTitle = jobTitle;
  }
  describe(): string {
    return `${super.describe()} describle phuc`;
  }
}
let employee = new Employee3("Hoi Dan IT", "Eric", "Web Developer");

console.log(employee.getFullName());
console.log(employee.describe());

// let employee = new Employee('John','Doe','Front-end Developer');

// Employee kết thừa lại person => dùng đc method của parent
// kế thừa lại viết ít đi tái sử dụng code
