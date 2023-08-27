function addNumberOrString(a: number | string, b: number | string) {
  if (typeof a === "number" && typeof b === "number") {
    return a + b;
  }
  if (typeof a === "string" && typeof b === "string") {
    return a.concat(b);
  }
  throw new Error("Parameter must string or number");
}
console.log(">>Check ", addNumberOrString(1, 2));

let ab: string | number; //union type
