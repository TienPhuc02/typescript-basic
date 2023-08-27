type phucType = number | string | boolean;
function addNumberOrString1(a: phucType, b: number | string) {
  if (typeof a === "number" && typeof b === "number") {
    return a + b;
  }
  if (typeof a === "string" && typeof b === "string") {
    return a.concat(b);
  }
  throw new Error("Parameter must string or number");
}
console.log(">>Check ", addNumberOrString1(1, 2));

let ab1: string | number; //union type
type typeKiTu = string;
let abc: typeKiTu = "phuc";
