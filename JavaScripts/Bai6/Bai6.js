// let arr1 = [];
// console.log(typeof arr1);
// let arr2 = [1, 2, 3, 4, " hiiii", [2, 3, 4]];
// console.log(arr2);
// console.log(typeof arr2);

// let arr3 = new Array(1, 2, 3);
// console.log(arr3);

// let arr4 = new Array(5);
// console.log(arr4.length);

// console.log(arr3[2]);
// console.log(arr4[2]);

// for (let i of arr3) {
//   // vòng for này không gán được giá trị chỉ show thôi
//   console.log(i);
// }

let arr1 = [1, 2, 3];
let arr2 = new Array(4, 5, 6);
let arr3 = new Array(7, 8);
let arr4 = arr1.concat(arr2, arr3);
console.log(arr4);
arr4.push(9, 10); // thêm vào cuối mảng gốc
console.log(arr4);

arr4.unshift(0, 0); // THêm vào đầu marng gốc
console.log(arr4);

let x = arr4.pop(); // xóa phần tử cuối mảng trả về phần tử đó
console.log(x);
console.log(arr4);

let y = arr4.shift(); // xóa phần tử đầu mảng trả về phần tử đó
console.log(y);
console.log(arr4);

let sliceArr = arr4.slice(1, 4); // tạo mảng sao cắt
console.log(sliceArr);

let sliceArr1 = arr4.slice(); // tạo mảng sao nguyên vẹn
console.log(sliceArr1);

let z = arr4.includes(10);
console.log(z);

let t = arr4.indexOf(2); // trả về index của phần tử ko có trả về -1
console.log(t);

let m = arr4.lastIndexOf(2); // trả về index của phần tử ko có trả về -1
console.log(m);

let arr5 = arr4.reverse();
console.log(arr5);

arr4.reverse();

let string = arr4.join();
console.log(string);

let string1 = arr4.join("+");
console.log(string1);

arr4.splice(3, 2); // xóa từ phần tử thứ 3 và xóa 5 phần tử
console.log(arr4);

arr4.splice(3, 2, 11); // xóa từ phần tử thứ 3 và xóa 5 phần tử rồi từ chỗ xóa thêm 11 vào
console.log(arr4);

let arr6 = [...arr4]; // sao chép arr4 sang arr6
console.log(arr6);

function sum(a, b, c) {
  return a + b + c;
}
console.log(sum(...arr1));
console.log([5, 6, ...arr1, ...arr4]);

arr4.push(10);
let arr7 = arr4.sort().reverse(); // so sánh từng kí tự kể cả số
console.log(arr4);

let arr8 = arr4.sort((a, b) => a - b); // hàm trả về giá trị nhỏ hơn 0 thì b đặt trc a
console.log(arr4);

let sum1 = arr1.reduce((accumulator, currenValue, curentIndeex, array) => {
  return accumulator + currenValue;
}, 0);
console.log(sum1);

let arr10 = arr4.filter((number) => number % 2 === 0);
console.log(arr10);

function bai1() {
  let arr = [];
  let n;
  do {
    n = Number(prompt("Nhập vào số phầ tử của mảng: "));
    if (Number.isInteger(n) && n > 0) {
      break;
    }
  } while (true);
  for (let i = 0; i < n; i++) {
    let input = Number(prompt("Mời nhập vào phần tử thứ " + i + " : "));
    arr.push(input);
  }
  console.log(arr);
}

function bai2() {
  let arr = [];
  let n;
  do {
    n = Number(prompt("Nhập vào số phầ tử của mảng: "));
    if (Number.isInteger(n) && n > 0) {
      break;
    }
  } while (true);
  for (let i = 0; i < n; i++) {
    let input = Number(prompt("Mời nhập vào phần tử thứ " + i + " : "));
    arr.push(input);
  }
  console.log(arr);
  let arr_reverse = arr.slice();
  console.log(arr_reverse.reverse());

  let arr_sort = [...arr];
  let arr1 = arr_sort.sort((a, b) => a - b);
  console.log(arr1);

  let sum = arr.reduce((x, y) => x + y, 0);
  console.log(sum);

  let x = Number(prompt("Nhập x: "));
  if (arr.indexOf(x) === -1) {
    console.log("X không có trong mảng");
  } else {
    console.log(`Vi tri của ${x} là: ${arr.indexOf(x)}`);
  }
}
bai2();
