function xinChao() {
  console.log("Hello");
}

xinChao();

function tong(a = 0, b = 0) {
  return a + b;
}
console.log(tong(5, 3));

let hieu = function (x = 0, y = 0) {
  return x - y;
};
console.log(hieu((x = 5), 3));

let multiplyArrow = (a, b) => a * b;

console.log(multiplyArrow(5, 3));

let congNhan = (num1, num2, num3) => {
  let sum = tong(num1, num2);
  let product = sum * num3;
  return product;
};
console.log(congNhan(4, 4, 4));

let giaiThua = (x) => {
  s = 1;
  for (let i = 1; i <= x; i++) {
    s *= i;
  }
  return s;
};
console.log(giaiThua(5));
let GiaiThua = function (x) {
  s = 1;
  for (let i = 1; i <= x; i++) {
    s *= i;
  }
  return s;
};
console.log(GiaiThua(5));

// var: khi nó khai báo sau thì vẫn đc dùng nhưng giá trị nó là undefined
// let: phải khai báo nó trc khi được dùng nếu không sẽ lỗi
// var: có thể khai báo lại
// let: không thể khai báo lại
// var: mọi khai báo đc cho lên đầu or cho lên đầu hàm
// let: chỉ trong khối
console.log(giatrivar);
var giatrivar = 5;
// let giatrivar = 8 câu này sẽ lỗi

let test = function () {
  console.log("Hello");
};
test();

test1();
function test1() {
  console.log("Hello");
}

function giaiThua1(n) {
  if (n === 0 || n === 1) {
    return 1;
  } else {
    return n * giaiThua1(n - 1);
  }
}
console.log(giaiThua1(5));
