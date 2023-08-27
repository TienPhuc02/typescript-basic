abstract class Employee {
  constructor(private ﬁrstName: string, private lastName: string) {}
  abstract getSalary(): number; // abstract method

  // normal method
  get fullName(): string {
    return `${this.ﬁrstName} ${this.lastName}`;
  }
  compensationStatement(): string {
    return `${this.fullName} makes ${this.getSalary()} a month.`;
  }
}
// không thể tạo mới 1 đối tượng từ class abstract
// const e1 = new Employee("phuc", "tien");
// dùng kế thức được

class FullTimeEmployee extends Employee {
  constructor(ﬁrstName: string, lastName: string, private salary: number) {
    super(ﬁrstName, lastName); // dùng super để kế thừa lại cha
  }
  // cần viết method này, vì nó được khai báo abstract ở trên
  getSalary(): number {
    return this.salary;
  }
}
class Contractor extends Employee {
  constructor(
    ﬁrstName: string,
    lastName: string,
    private rate: number,
    private hours: number
  ) {
    super(ﬁrstName, lastName);
  }
  getSalary(): number {
    return this.rate * this.hours;
  }
}
const test1 = new FullTimeEmployee("tien ", "phuc", 1000);
console.log(test1.getSalary());
let e1 = new FullTimeEmployee("‘Eric’", "‘Hoi Dan IT’", 12000);
let e2 = new Contractor("Eric", "Hoi Dan IT", 100, 160);

console.log(e1.compensationStatement());
console.log(e2.compensationStatement());
