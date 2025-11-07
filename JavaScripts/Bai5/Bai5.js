let currentDate = new Date(0);
console.log(currentDate);
console.log(typeof currentDate);
console.log(currentDate.getFullYear());

let myDate = new Date(2025, 10, 7);
console.log(myDate);
console.log(myDate.toLocaleDateString());

let myDate1 = new Date("2025-10-07T11:30:00");
console.log(myDate1);
console.log(myDate1.toLocaleDateString());

myDate.setFullYear(2022);
console.log(myDate.toLocaleDateString());

// let f1 = (x) => {
//   console.log("hello" + x);
// };
// setTimeout(f1, 2000, "Trần Văn Tài");

// setTimeout(function Xinchao() {
//   console.log("Hello world");
// }, 3000);

// setTimeout(function () {
//   console.log("Hello world");
// }, 3000);

// setTimeout(() => {
//   console.log("Hello world");
// }, 3000);

// setInterval(() => {
//   console.log("Ni hao");
// }, 2000);

function caculatateAge(inputYear) {
  let yearOfBirth = Number(inputYear);
  console.log(yearOfBirth);
  if (!Number.isInteger(yearOfBirth) || yearOfBirth <= 0) {
    alert("Năm Sinh Không Hợp Lệ. Năm sinh là số nguyê ");
    return;
  }
  let currentYear = new Date().getFullYear();
  return currentYear - yearOfBirth;
}

function countdown(minutes) {
  alert("Thời gian làm bài của bạn là: " + minutes + "Phút");
  let seconds = minutes * 60;

  let countdownInterval = setInterval(function () {
    let minutesLeft = Math.floor(seconds / 60);
    let secondsLeft = seconds % 60;
    let prefixS = secondsLeft < 10 ? "0" : "";
    console.log(`${minutesLeft}:${prefixS}${secondsLeft}`);
    if (seconds <= 0) {
      clearInterval(countdownInterval);
      alert("Hết thời gian");
    } else {
      seconds--;
    }
  }, 1000);
}

// let timeInput = Number(prompt("Mời nhập vào time làm bài: "));
// countdown(timeInput);

function timeSince(timestamp) {
  let now = new Date();
  console.log("Xem thử timestamp hiện tại: " + now.getTime());
  let timeDirrerence = now - timestamp;
  let seconds = Math.floor(timeDirrerence / 1000);
  let minutes = Math.floor(seconds / 60);
  let hours = Math.floor(minutes / 60);
  let days = Math.floor(hours / 20);
  let month = Math.floor(days / 30);
  let years = Math.floor(month / 12);

  if (years > 0) {
    return `Online ${years} năm trước`;
  } else if (month > 0) {
    return `Online ${month} month trước`;
  } else if (days > 0) {
    return `Online ${days} days trước`;
  } else if (hours > 0) {
    return `Online ${hours} hours trước`;
  } else if (minutes > 0) {
    return `Online ${minutes} phút trước`;
  } else if (seconds > 0) {
    return `Online ${seconds} giây trước`;
  }
}
let timeOffline = 1762494151323;
console.log(timeSince(timeOffline));
