let s1 = `hihisdsd sdsds
sdsdsdsd`;

console.log(s1);

let ten = "Linh";
console.log(ten[2]);
console.log(s1.length);

let str = "Da Jia Hao Hao";

console.log("Chuỗi sau cắt: " + str.slice(1, 5));
console.log("Chuỗi sau cắt: " + str.substring(1, 7));
// substring: không cần phải theo thứ tự 2 tham số. nhưng ko có tham số âm
// slice: phải theo thứ tự. nhưng có thể tham số âm

let str1 = "    sfs  fs fsfd     ";
console.log("Chuỗi sau cắt: " + str1);
console.log("Chuỗi sau cắt: " + str1.length);
console.log("Chuỗi sau cắt: " + str1.trim());
console.log("Chuỗi sau cắt: " + str1.trim().length);

console.log("Chuỗi sau cắt: " + str1.trimEnd().length);
console.log("Chuỗi sau cắt: " + str1.trimStart().length);

let str_concat = str.concat(str1);
console.log("Chuỗi sau cắt: " + str_concat);
console.log("Chuỗi sau cắt: " + str_concat.toUpperCase());
console.log("Chuỗi sau cắt: " + str_concat.toLowerCase());
console.log("Chuỗi sau cắt: " + str_concat.charAt(5));

let srt_replace = str.replace(/Hao/g, "Bu Hao");
console.log("Chuỗi sau cắt: " + srt_replace);
console.log("Chuỗi sau cắt: " + str.repeat(3));

console.log("Vị trí lần đầu tiên xuất hiện: " + str.indexOf("Hao", 8));

console.log("Vị trí lần đầu tiên xuất hiện: " + str.lastIndexOf("Hao", 7));
console.log("Vị trí lần đầu tiên xuất hiện: " + str.includes("Hao", 12));

console.log("bắt đầu bằng " + str.startsWith("a", 5));
console.log("bắt đầu bằng " + str.endsWith("o"));

let student = "Hoa,Lan,Hue,Trung,Tai";
let arr = student.split(",");
console.log("Mnarg " + arr);
console.log("Mnarg " + arr[1]);
console.log("Mnarg " + student.split(",", 3));

let bai1 = function (x) {
  results = [0, 0, 0, 0];
  for (let i = 0; i < x.length; i++) {
    if (x[i] >= "a" && x[i] <= "z") {
      results[0] += 1;
    } else if (x[i] >= "A" && x[i] <= "Z") {
      results[1] += 1;
    } else if (x[i] >= "0" && x[i] <= "9") {
      results[2] += 1;
    } else if (x[i] === " ") {
      results[3] += 1;
    }
  }
  return results;
};

let bai2 = () => {
  let count = 0;
  let passWord;
  let arr;
  do {
    count++;
    if (count > 5) {
      alert("Bạn đã bị khóa mk");
      return;
    }
    passWord = prompt(`Nhập mật khẩu lần ${count}: `);
    arr = bai1(passWord);
  } while (passWord.length < 6 || arr[1] === 0 || arr[2] === 0 || arr[0] === 0);
  console.log("Đặt mật khẩu thành công!");
};

function Bai3(message) {
  const a = "abcdefghijklmnopqrstuvwxyz";
  const b = "zyxvbnmasdfghjklqwertyuiop";
  let results = "";
  for (let i = 0; i < message.length; i++) {
    let char = message[i].toLowerCase();
    if (a.indexOf(char) === -1) {
      results += char;
    } else {
      results += b[a.indexOf(char)];
    }
  }
  return results;
}

let Bai4 = (message, targerWord = "tôi") => {
  let count = 0;
  for (let i = 0; i < message.length; i++) {
    if (message.slice(i, i + targerWord.length) === targerWord) {
      count += 1;
    }
  }
  return count;
};
// console.log(Bai4("Tao Tên tài nè tôi là tôi"));

function Bai5(message) {
  let letters = "";
  let number = "";
  for (let i = 0; message.length; i++) {
    let char = message[i];
    if (isNaN(char)) {
      letters += char;
    } else {
      number += char;
    }
  }
  return { letters, number };
}

let results = Bai5("df4545dvftr455");
alert(results.letters);
alert(results.number);
