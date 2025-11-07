const student = {
  fullName: "Trần Như Nhộng",
  birthYear: 2005,
  "@Status": "Ngu",
  address: {
    city: "Hà Nội",
    country: " Việt Nam",
  },
  scores: [8, 9, 10],

  getAge: function () {
    return 2025 - this.birthYear;
  },
  getAge2: function () {
    this.age = 2025 - this.birthYear;
    return this.age;
  },
  scoreMean: function () {
    sumScores = this.scores.reduce((a, b) => a + b, 0);
    return sumScores / 3;
  },
};

console.log(student.fullName);
console.log(student["fullName"]);
console.log(student["@Status"]);

console.log(student.getAge());
student.getAge2();
console.log(student.age);

student.email = "hihihsidsd@gmail.com";
student["website"] = "TaiTuhoc";

console.log(student);
delete student.website;
console.log(student);

console.log(Object.keys(student));
console.log(Object.values(student));
console.log(Object.entries(student));

let target = { c: 100 };
Object.assign(target, student);
console.log(Object.entries(target));

const person = {
  name: "Tai",
  age: 20,
};
person.name = "Hiếu";
console.log(person);

// đây là 1 trong những cách khai báo class
function Student(fullName, ID, birthYear, homeTown) {
  //attrribute
  this.fullName = fullName;
  this.ID = ID;
  this.birthYear = birthYear;
  this.homeTown = homeTown;
  //method
  this.showInfo = function () {
    return `${this.fullName} ${this.ID} ${this.homeTown}`;
  };
}

const sv1 = new Student("Trần Văn Tài", "24343", "2025", "Hải Dương");
const sv2 = new Student("Nguyễn Văn Hiếu", "244", "2024", "Hải Phòng");
console.log(sv1);
console.log(sv2);
console.log(sv2.fullName);
console.log(sv2.showInfo());

let M = new Array();
console.log(typeof M);
console.log(M);

Student.prototype.calcAge = function () {
  return 2025 - this.birthYear;
};
console.log(sv2);

const SinhVienEx = class {
  //đây là 1 trong  những cách khai báo class
};
// đây cx là cách khai báo thông dụng nhất nè
class SinhVien {
  constructor(fullName, ID, birthYear, homeTown) {
    this.fullName = fullName;
    this.ID = ID;
    this.birthYear = birthYear;
    this.homeTown = homeTown;
  }
  showInfo() {
    return `${this.fullName} ${this.ID} ${this.homeTown}`;
  }
  static hello() {
    console.log("hello");
  }
}
const stu3 = new SinhVien("Thomas", 1234, 2005, "Cam Giang");
console.log(stu3);
console.log(stu3.showInfo());
SinhVien.prototype.calcAge = function (currentYear) {
  return currentYear - this.birthYear;
};
console.log(stu3.calcAge(2025));
console.log(stu3);

console.log(SinhVien.hello());

class School {
  constructor(ID, name, birthYear) {
    this.ID = ID;
    this.name = name;
    this.birthYear = birthYear;
  }
  calcAge(currentYear) {
    return currentYear - this.birthYear;
  }
}

const p1 = new School("Pfdfd", "Hafdfd", 2000);
console.log(p1);

class Student1 extends School {
  constructor(id, name, birthYear, major) {
    super(id, name, birthYear);
    this.major = major;
  }
  study() {
    console.log(`${this.name} is studying ${this.major}`);
  }
}
const s1 = new Student1("Pfdfd", "Hafdfd", 2000, "Computer Science");
console.log(s1);
