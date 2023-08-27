function addNumber(a: number, b: number) {
  return a + b;
}
function addString(a: string, b: string) {
  return a + b;
}
function add(a: number | string, b: number | string) {
  if (typeof a === "number" && typeof b === "number") {
    return a + b;
  }
  if (typeof a === "string" && typeof b === "string") {
    return a + b;
  }
}

// const addNew = (a: number, b: number) => {};
function addNew(a: number, b: number): number;
function addNew(a: string, b: string): string;
function addNew(a: any, b: any) {
  return a + b;
}
console.log(">>check addNew=", addNew(1, 2), addNew("phuc", "tien"));
/// định nghĩa các hàm có tên giống nhau gọi là over loading, chủ yếu là các parameter
