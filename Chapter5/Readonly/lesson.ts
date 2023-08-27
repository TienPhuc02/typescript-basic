class Person2 {
  readonly birthDate: Date;

  constructor(birthDate: Date) {
    this.birthDate = birthDate;
  }
}

let person = new Person2(new Date(1990, 12, 25));
// person.birthDate = new Date(1991, 12, 25);error
//dùng khi thao tác với class, interface,OOP ,readonly => chỉ đọc => KHÔNG MODIFY (UPDATE/DELETE)
