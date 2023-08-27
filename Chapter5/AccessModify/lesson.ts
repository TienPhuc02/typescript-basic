class Employee {
  public empCode: string;
  private empName: string;
  constructor(empCode: string, empName: string) {
    this.empCode = empCode;
    this.empName = empName;
  }
  // getter/setter
}

class Employee1 {
  public empName: string;
  protected empCode: number;
  constructor(name: string, code: number) {
    this.empName = name;
    this.empCode = code;
  }
}

class SalesEmployee extends Employee {
  private department: string;
  constructor(name: string, code: number, department: string) {
    super(code.toString(), name);
    this.department = department;
  }
}

let emp1 = new SalesEmployee("John Smith", 123, "Sales");
console.log(emp1);
