let skill: (string | number)[] = ["phuc", 21];
skill.push("coding");
skill.push(1000); // array

let skill1: [string, number] = ["phuc", 21];
skill.push("coding");
skill.push(1000); //tuple nó quy định số lượng phần tử trong array và thứ tự kiểu tương ứng với giá trị trong array

//tuple :dataType/size/order

let skill2: [boolean, string, number];
// skill2 = [true, "phuc", 21];
// tham số optinal trong tuple , thêm dấu ? bên cạnh type nhưng mà phải để ở cuối
let skill3: [boolean, string, number?];
skill3 = [true, "phuc"];
