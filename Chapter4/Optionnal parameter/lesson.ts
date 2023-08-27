const sum1 = (x: number, y: number, z?: number) => {
  if (z) return x + y + z;
  return x + y;
};
console.log(sum1(1, 2));
