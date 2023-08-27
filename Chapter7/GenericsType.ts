//Generic Basic
type User = {
  name: string;
  age: number;
};

// type Identity = { <Type>(value: Type): Type };

// interface Identity  { <Type>(value: Type): Type };

interface Identity<Type> {
  (value: Type): Type;
}

//generic với arrow function
const identity = <Type>(value: Type) => {
  return value;
};

// generic với  function thường
// function identity<Type>(value: Type) {
//   return value;
// }

// const myIdentity: <Type>(value: Type) => Type = identity;// khai báo 1 biến chứa hàm

// const myIdentity: { <Type>(value: Type): Type } = identity;// cách viết với object

// const myIdentity: Identity = identity;

const myIdentity: Identity<number> = identity; // 1 cách viết khác

myIdentity(2); // Identity<number> -> chỉ được truyền vào number

const results = identity<User>({
  name: "abc",
  age: 12,
});

//Ràng buộc Generic

interface LengthObject {
  length: number;
}
const logIdentity = <Type extends LengthObject>(value: Type) => {
  console.log(value.length);
  return value;
}; // khai báo thuộc tính length cho value

logIdentity({
  length: 200,
});

//

const getValue = <Obj, Key extends keyof Obj>(obj: Obj, key: Key) => {
  console.log(obj);
  console.log(key);
  return obj[key];
};
getValue(
  {
    name: "phuc",
    age: 20,
  },
  "age"
);

//default generic

interface Box<Type = string> {
  value: Type;
}
const box: Box = {
  value: "troll",
};
const box2: Box<number> = {
  value: 123,
};
