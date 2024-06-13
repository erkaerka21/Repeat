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
let Utoo = "";
for (let i = 1; i <= 5; i++) {
  Utoo += i + " ";
}
console.log(Utoo);
Utoo = 0;
let Usum = 0;
for (let i = 1; i <= 5; i++) {
  Utoo += 1;
  Usum = Usum + Utoo;
}
console.log("Өгөгдсөн натурал тооны нийлбэр : ", Usum);

//daalgavar8
let Ugugdul = "";
for (let i = 1; i <= 8; i++) {
  Ugugdul += i + " ";
}
console.log(Ugugdul);
Ugugdul = 0;
let UgugduliinSum = 0;
for (let i = 0; i <= 8; i++) {
  Ugugdul += 2;
  UgugduliinSum = UgugduliinSum + Ugugdul;
}
console.log(UgugduliinSum);
