function handleExeption(errorMessages: string): never {
  throw Error(errorMessages);
}
function runInfinity(): void {
  //   while (true) {
  //     console.log("coding....");
  //   }
}
// handleExeption("just a test error");

let a = handleExeption("just a test error");
console.log("check a", a);
// void trả ra undefined , never không trả ra cái gì
