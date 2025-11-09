console.log(document.firstElementChild.lastElementChild.firstElementChild);
let heading = document.firstElementChild.lastElementChild.firstElementChild;

console.log(heading.innerHTML);

heading.innerHTML = "Wo da thay doi";

let arr = document.getElementsByTagName("li");
console.log(arr); //mảng các phần tử li
console.log(arr.length); //mảng các phần tử li

arr[1].innerHTML = "aaaaaaaaaaaaaa";

// let arr1 = document.getElementsByClassName("list");
// console.log(arr1); //mảng các phần tử lisst
// arr1[0].innerHTML = "Thay đổi tiếp nè";

let x = document.getElementById("list_about");
console.log(x); //mảng các phần tử lisst
x.innerHTML = "Thay đổi tiếp bằng id nè";

let title = document.querySelector("#heading_title");
console.log(title);

// let first_item = document.querySelector(".list");
// console.log(first_item);
// first_item.innerHTML = "Trang Chủ";

let ElementLink = document.querySelector("ul a"); // chỉ lấy 1 phần tử thỏa mãn điều kiện đầu tiên
console.log(ElementLink);

let checkbox = document.querySelector("input");
checkbox.checked = true;

let list_li = document.querySelectorAll("li"); // lấy tất cả phần tử
console.log(list_li);

setInterval(() => {
  const now = new Date();
  const hours = now.getHours(); //.padStart(2,"0") ở đay thì cũng như 3 dòng dưới
  const minutes = now.getMinutes();
  const second = now.getSeconds();

  let prefixSecond = second < 10 ? "0" : "";
  let prefixMinutes = minutes < 10 ? "0" : "";
  let prefixHours = hours < 10 ? "0" : "";

  const timeString = `${prefixHours}${hours} : ${prefixMinutes}${minutes} : ${prefixSecond}${second}`;
  console.log(timeString);
  let clock_text = document.querySelector("#clock");
  clock_text.innerHTML = timeString;
}, 10000);

const firstLink = document.querySelector("a");
console.log(firstLink.getAttribute("href"));

firstLink.setAttribute("target", "_blank");

let demo = document.querySelector("#demo");
console.log(demo);
console.log(demo.textContent);
console.log(demo.innerHTML);
console.log(demo.innerText);
let demo2 = document.querySelector("#demo2");
demo2.innerHTML = "<p><i>Tự học .cc</i></p>";
console.log(demo2);
demo2.textContent = "<p><i>Tự học .cc</i></p>";
demo2.innerText = "<p><i>Tự học .cc</i></p>";

heading.style.backgroundColor = "cyan";
heading.style.fontSize = "50px";

Object.assign(heading.style, {
  backgroundColor: "red",
  fontSize: "50px",
  color: "Black",
});

let element = document.getElementById("myElement");
element.classList.add("newClass");
console.log(element.classList.contains("newClass"));
element.classList.remove("newClass");

let element1 = document.createElement("p");
element1.innerHTML = "Tạo element bằng createElement nè";
element.append(element1);
console.log(element);
