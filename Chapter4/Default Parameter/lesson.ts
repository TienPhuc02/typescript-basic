const sum2 = (x: number, y: number, z = false) => {
  if (z === false) {
    return x + y;
  }
  if (z) {
    return x - y;
  }
};
console.log(sum2(1, 2));
