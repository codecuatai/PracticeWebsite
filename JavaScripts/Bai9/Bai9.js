const btn = document.querySelector("#btn");

btn.onclick = () => {
  alert("Bạn đã nhán tôi");
};
function clickHandler() {
  alert("Cách 2");
}
btn.onclick = clickHandler;
btn.onclick = function () {
  alert("cách 3");
};

const btn3 = document.getElementById("btn3");
btn3.addEventListener("click", () => {
  alert("xin chào mọi người");
});

const btn4 = document.getElementById("btn4");
function handleClick4() {
  alert("hihihi");
}
function handleClick4_1() {
  alert("hahahaha");
}
btn4.addEventListener("click", handleClick4);
btn4.addEventListener("click", handleClick4_1);

btn4.removeEventListener("click", handleClick4);

const btnBai1 = document.querySelector(".btnBai1");
btnBai1.addEventListener("click", () => {
  if (document.body.style.backgroundColor !== "red") {
    document.body.style.backgroundColor = "red";
    btnBai1.innerHTML = document.body.style.backgroundColor;
  } else {
    document.body.style.backgroundColor = "white";
    btnBai1.innerHTML = document.body.style.backgroundColor;
  }
});

function randomColor() {
  const r = Math.floor(Math.random() * 256);
  const g = Math.floor(Math.random() * 256);
  const b = Math.floor(Math.random() * 256);
  return `rgb(${r},${g},${b})`;
}
const btnList = document.querySelectorAll(".btn");

for (let btn of btnList) {
  btn.addEventListener("click", () => {
    btn.style.backgroundColor = randomColor();
    btn.style.color = randomColor();
  });
}

const h1List = document.querySelectorAll(".title");
for (let h1 of h1List) {
  h1.addEventListener("click", () => {
    h1.style.backgroundColor = randomColor();
    h1.style.color = randomColor();
  });
}

const inp = document.querySelector("#inp");
inp.addEventListener("keydown", (e) => {
  console.log(e);
});
inp.addEventListener("keyup", (e) => {
  console.log(e.key);
});

const form = document.querySelector("#login");
form.addEventListener("submit", (e) => {
  e.preventDefault(); // ngăn ngừa sự kiện mặc định
  alert("Form đã đc nộp");
  li = document.createElement("li");
  li.innerText = document.querySelector("#name").value;
  document.querySelector("#list").append(li);

  document.querySelector("#name").value = "";
  document.querySelector("#password").value = "";
});

const link = document.querySelector("#link");
link.addEventListener("click", function (e) {
  e.preventDefault();
});
