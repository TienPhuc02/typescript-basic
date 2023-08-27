interface IPerson {
  ﬁrstName: string;
  lastName: string;
  //   adsress: string;
}
//interface có thể cộng gộp, dùng để định nghĩa cấu trúc dữ liệu, hướng về OOP
type Person = {
  firstName: string;
  lastName: string;
};
function getFullName(person: IPerson) {
  //   person.firstName = "Eric";
  return `${person.ﬁrstName} ${person.lastName}`;
}

let person1 = {
  ﬁrstName: "Eric",
  lastName: "Hoi Dan IT",
  address: "ha Noi",
};

console.log(getFullName(person1));
// Eric Hoi Dan IT
