//daalgavar1
let too = "";
for (let i = 1; i <= 10; i++) {
  too += "" + i + " ";
}
console.log(too);

for (let H = 1; H <= 10; H++) {
  console.log("Натурал тоо бол : ", H);
}

//daalgavar2
for (let Y = 1; Y <= 10; Y++) {
  if (Y % 2 === 1) {
    console.log("Сондгой тоо : ", Y);
  }
}

//daalgavar3
for (let Y = 1; Y <= 10; Y++) {
  if (Y % 2 === 0) {
    console.log("Тэгш тоо : ", Y);
  }
}

//daalgavar4
let Too = 0;
let sum = 0;
for (let X = 1; X <= 100; X++) {
  Too += 1;
  sum = sum + Too;
}
console.log("1 - 100 хүртэлх тооны нийлбэр", sum);

//daalgavar5
let RandomN = 0;
let RandomNsum = 0;
for (let Z = 1; Z <= 201; Z++) {
  console.log("Дурын N хүртэлх натурал тоо : ", Z);
  RandomN += 1;
  RandomNsum = RandomNsum + RandomN;
}
console.log("Дурын N хүртэлх тооны нийлбэр : ", RandomNsum);

//daalgavar6
let RandomNfac = 1;
for (let Z = 1; Z <= 20; Z++) {
  RandomNfac *= Z;
}
console.log("Дурын N хүртэлх тооны факториал : ", RandomNfac);

//daalgavar7
// let Utoo = "";
// for (let i = 1; i <= 5; i++) {
//   Utoo += i + " ";
// }
// console.log(Utoo);
// Utoo = 0;
// let Usum = 0;
// for (let i = 1; i <= 5; i++) {
//   Utoo += 1;
//   Usum = Usum + Utoo;
// }
// console.log("Өгөгдсөн натурал тооны нийлбэр : ", Usum);

let number = 123;
console.log("Өгөгдсөн тоо : ", number);
let digit = 0;
let Sum = 0;

while (number !== 0) {
  digit = number % 10;
  number = number - digit;
  number = number / 10;
  Sum = Sum + digit;
}
console.log("Өгөгдсөн тооны нийлбэр", Sum);

//daalgavar8
let UgugdsunToo = 123456;
console.log("Өгөгдсөн тоо : ", UgugdsunToo);
let TOO = 0;
let Tsum = 0;
while (UgugdsunToo !== 0) {
  TOO = UgugdsunToo % 10;
  UgugdsunToo = UgugdsunToo - TOO;
  UgugdsunToo = UgugdsunToo / 10;
  if (TOO % 2 === 0) {
    Tsum = Tsum + TOO;
  }
}
console.log("Өгөгдсөн тоонуудын тэгш тооны нийлбэр", Tsum);

//daalgavar9
let RandomNumber = 123456789;
console.log("Өгөгдсөн тоонууд : ", RandomNumber);
TOO = 0;
Tsum = 0;
while (RandomNumber !== 0) {
  TOO = RandomNumber % 10;
  RandomNumber = RandomNumber - TOO;
  RandomNumber = RandomNumber / 10;
  if (TOO % 2 === 1) {
    console.log("Өгөгдсөн тоонуудын сондгой тоо : ", TOO);
    Tsum = Tsum + TOO;
  }
}
console.log("Өгөгдсөн тоонуудын сондгой тооны нийлбэр", Tsum);

//daalgavar10
let RNumber = 12345678;
console.log("Өгөгдсөн тоонууд : ", RNumber);
TOO = 0;
Tsum = 0;
while (RNumber !== 0) {
  TOO = RNumber % 10;
  RNumber = RNumber - TOO;
  RNumber = RNumber / 10;
  if (TOO % 2 === 0) {
    console.log("Өгөгдсөн тоонуудын тэгш тоо : ", TOO);
    Tsum = Tsum + TOO;
  }
}
console.log("Өгөгдсөн тоонуудын тэгш тооны нийлбэр", Tsum);

//daalgavar11
let NumberR = 1234567;
console.log("Өгөгдсөн тоонууд : ", NumberR);
TOO = 0;
Tsum = 0;
while (NumberR !== 0) {
  TOO = NumberR % 10;
  NumberR = NumberR - TOO;
  NumberR = NumberR / 10;
  console.log("Өгөгдсөн тоо : ", TOO);
  while (TOO !== 7654321) {
    NumberR = NumberR * 10;
    TOO = NumberR + TOO;
  }
}
