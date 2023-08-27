function fn(...rest: number[]) {}

function getTotal(...numbers: number[]): number {
  let total = 0;
  numbers.forEach((num) => (num += num));
  return total;
}
console.log(getTotal()); //0
console.log(getTotal(10, 20)); //30
console.log(getTotal(10, 20, 30)); //60
// copy cac phan tu
