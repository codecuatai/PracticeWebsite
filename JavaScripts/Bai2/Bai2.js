// let numberA = parseFloat(prompt("Mời nhập vào number A: "));
// let numberB = parseInt(prompt("Mời nhập vào number B: "));
// console.log(typeof numberA);
// console.log(`Kết quả A+B = ${(A = numberA + numberB)}`);
// console.log(`Kết quả A-B = ${(A = numberA - numberB)}`);
// console.log(`Kết quả A*B = ${(A = numberA * numberB)}`);
// console.log(`Kết quả A/B = ${(A = numberA / numberB)}`);
// console.log(`Kết quả A%B = ${(A = numberA % numberB)}`);

// let numberC = Number(prompt("Nhập vào số number C"));
// console.log(numberC);
// console.log(typeof numberC);

// let r = Number(prompt("Nhập bán kính của đường tròn: "));
// console.log(r);
// console.log(typeof r);

// let PI = Math.PI;
// let chuvi = 2 * PI * r;
// let dienTich = PI * r * r;

// console.log(`Chu vi hình tròn : ${chuvi}`);
// console.log(`Dien Tich Hinh tròn: ${dienTich}`);

// let a = Number(prompt("Nhập vào chiều rộng: "));
// let b = Number(prompt("Nhập vào chiều dài: "));

// console.log(`Dien tich hinh chhu nhat ${a * b}`);
// console.log(`Chu vi hình chữ nhật ${2 * (a + b)}`);

// let a = Number(prompt("Nhập điểm toán: "));
// let b = Number(prompt("Nhập điểm văn: "));
// let c = Number(prompt("Nhập điểm anh: "));
// let diemtb = (a + b + c) / 3;
// console.log(`Điểm trung bình : ${diemtb.toFixed(2)}`);

// let a = 1;
// let b = 3;
// let c = "3";

// console.log(b === c);
// console.log(b == c);
// console.log(b != c);
// console.log(b !== c);
// console.log(b > a);

// console.log("-----------------------------------");

// let a = Math.sqrt(4);
// console.log(a);

// let b = Math.pow(2, 3);
// console.log(`A mũ b: ${Math.pow(a, b)}`);
// math.ceil : làm tròn lên
// math.floor: làm tròn xuống
// math.round: làm tròn theo mốc 0.5
console.log("-----------------------------------");
// let str = "3cc";
// console.log(typeof str);
// let num = Number(str);
// console.log(num);
// console.log(typeof num);

// let a = "123";
// console.log(isNaN(true));

// let random1 = Math.random();
// console.log(random1);

// let random2 = Math.random() * 10;
// console.log(random2);

// let random3 = parseInt(Math.random() * 10);
// console.log(random3);

// let random4 = parseInt(Math.random() * 21) + 10;
// console.log(random4);

// let dtb = Number(prompt("Mời nhập vào điểm cụ thể: "));
// if (dtb >= 5.0) {
//   console.log("Bạn đã đỗ");
// } else {
//   console.log("Bạn đã trượt");
// }

// let score = parseFloat(prompt("Please Input Score: "));
// if (score <= 10 && score >= 8) {
//   console.log("Học sinh giỏi");
// } else if (score < 8 && score >= 6.5) {
//   console.log("Học sinh khá");
// } else if (score < 6.5 && score >= 4) {
//   console.log("Học sinh trung bình");
// } else if (score < 4 && score >= 0) {
//   console.log("Bị trượt");
// } else {
//   console.log("You input an incorrect score");
// }

// let tong = Number(prompt("Tổng là: "));
// let hieu = Number(prompt("Hiệu là: "));
// let x = (tong + hieu) / 2;
// let y = tong - x;

// console.log("Giá trị x: " + x, "Giá trị y: ", y);

// let weight = Number(prompt("Nhập vào cân nặng: "));
// let height = Number(prompt("Nhập vào chiều cao: "));

// let BMI = weight / Math.pow(height, 2);

// if (BMI < 15) {
//   console.log("Quá gầy");
// } else if (BMI >= 15 && BMI < 16) {
//   console.log("Gầy");
// } else if (BMI >= 16 && BMI < 18.5) {
//   console.log("Hơi gầy");
// } else if (BMI >= 8.5 && BMI < 25) {
//   console.log("Bình thường");
// } else if (BMI >= 25 && BMI < 30) {
//   console.log("Hơi béo");
// } else if (BMI >= 30 && BMI < 35) {
//   console.log("Béo");
// } else if (BMI >= 35) {
//   console.log("Quá Béo");
// }

// let year = Number(prompt("Entered a year: "));
// if ((year % 4 === 0 && year % 100 !== 0) || year % 400 === 0) {
//   console.log("This is a leap year");
// } else {
//   console.log("This isn't leap year");
// }

// let month = parseInt(prompt("Entered month: "));
// let year = parseInt(prompt("Entered year: "));

// if (!isNaN(month) && month >= 1 && month <= 12) {
//   if (
//     month == 1 ||
//     month == 3 ||
//     month == 5 ||
//     month == 7 ||
//     month == 8 ||
//     month == 10 ||
//     month == 12
//   ) {
//     console.log(`Month ${month}, Year ${year} has a 31 day`);
//   } else if (month == 4 || month == 6 || month == 9 || month == 11) {
//     console.log(`Month ${month}, Year ${year} has a 30 day`);
//   } else {
//     if ((year % 4 === 0 && year % 100 !== 0) || year % 400 === 0) {
//       console.log(`Month ${month}, Year ${year} has a 29 day`);
//     } else {
//       console.log(`Month ${month}, Year ${year} has a 28 day`);
//     }
//   }
// } else {
//   console.log("You entered isn't correct. Please enter month and year");
// }

// let a = parseFloat(prompt("Entered a: "));
// let b = parseFloat(prompt("Entered b: "));
// let c = parseFloat(prompt("Entered c: "));

// let denta = Math.pow(b, 2) - 4 * a * c;
// if (denta < 0) {
//   console.log("Phương trình cô nghiệm");
// } else if (denta == 0) {
//   console.log("Phương trình có 1 nghiệm: " + -b / (2 * a));
// } else {
//   let x1 = (-b + Math.sqrt(denta)) / (2 * a);
//   let x2 = (-b - Math.sqrt(denta)) / (2 * a);
//   console.log(`Phương trình có 2 nghiệm phân biệt x1 = ${x1} và x2 = ${x2}`);
// }

// let number = 10;
// let message = number > 10 ? "yes" : "No";
// console.log(message);

// let numbe2 = 10;
// let message2 = number % 2 == 0 ? "chẵn" : "lẻ";
// console.log(message2);

// let score = Number(prompt("Entered score: "));
// let message3 = score >= 8 ? "Giỏi" : score >= 6.5 ? "Khá" : "TB";
// console.log(message3);

// let number = 3;

// switch (number % 2) {
//   case 0:
//     console.log("Số chẵn");
//     break;
//   case 1:
//     console.log("Số lẻ");
//     break;
//   default:
//     console.log("Không phải số");
// }

// let = choice = Number(
//   prompt(`Lựa chọn cách tìm kiếm:
//     1. Tìm kiếm theo tên
//     2. TÌm kiếm theo tác giả
//     3. Tìm kiếm theo nhà xuất bản
//     4. Tìm kiếm theo nhà xuất bản`)
// );
// switch (choice) {
//   case 1:
//     alert("Bạn đã chọn tìm theo tên");
//     break;
//   case 2:
//     alert("Bạn đã chọn tìm theo tác giả");
//     break;
//   case 3:
//     alert("Bạn đã chọn tìm theo nhà xuất bản");
//     break;
//   case 4:
//     alert("Bạn đã chọn tìm theo nhà xuất bản");
//     break;
//   default:
//     alert("Bạn đã chọn sai");
//     break;
// }

// let i = 1;
// while (i <= 5) {
//   console.log(i);
//   i++;
// }

// let n;
// do {
//   n = Number(prompt("Nhập vào số N: "));
// } while (!Number.isInteger(n) || n < 0);
// let giaiThua = 1;
// while (n > 0) {
//   giaiThua *= n;
//   n--;
// }
// console.log(giaiThua);

// let a;
// do {
//   a = Number(prompt("Nhập vào số a: "));
// } while (!Number.isInteger(a));

// if (a % 2 == 0) {
//   let sum = 0;
//   for (let i = 0; i <= a; i += 2) {
//     sum += i;
//   }
//   console.log(`Gia trị là ${sum}`);
// } else {
//   console.log("tao không tính giá trị lẻ");
// }

// let a;
// do {
//   a = Number(prompt("Nhập vào số a: "));
// } while (!Number.isInteger(a));

// let sum = 0;
// for (let i = 1; i <= a; i++) {
//   let s = 1;
//   for (let j = 1; j <= i; j++) {
//     s *= j;
//   }
//   sum += s;
// }
// console.log(sum);

let a;
do {
  a = Number(prompt("Nhập vào số a: "));
} while (!Number.isInteger(a));

for (i = 1; i <= a; i++) {
  let s = 0;
  for (j = 1; j < i; j++) {
    if (i % j === 0) {
      s += j;
    }
  }
  if (s === i) {
    console.log(`${i}`);
  }
}
