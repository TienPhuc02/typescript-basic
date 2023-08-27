class Person {
  ssn: string;
  ﬁrstName: string;
  lastName: string;

  constructor(ssn: string, ﬁrstName: string, lastName: string) {
    this.ssn = ssn;
    this.ﬁrstName = ﬁrstName;
    this.lastName = lastName;
  }

  getFullName(): string {
    return `${this.ﬁrstName} ${this.lastName}`;
  }
}
let phuc = new Person("123", "phuc", "guma");
console.log(phuc, phuc.getFullName());
