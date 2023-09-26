const name = "Mehedi";
const repoCount = 50;
// console.log(name + repoCount);
// console.log(`my name is ${name} and my total repository is ${repoCount}`);

let myName = new String("Mehedi-Hasan-Rony");
// console.log(myName);
// console.log(myName.length);
// console.log(typeof myName);
// console.log(myName[0]);
// console.log(myName.indexOf("d"));
// console.log(myName.lastIndexOf("R"));
// console.log(myName.__proto__);
// console.log(myName.charAt(4));

const newString = myName.substring(0, 5);
// console.log(newString);

const anotherNewString = myName.slice(-9, 4);
// console.log(anotherNewString);

const NewStringone = "    Mehedi   ";
// console.log(NewStringone);
// console.log(NewStringone.trim());

const url = "https://mehedi%20hasan.com";
console.log(url.replace("%20", "-"));

console.log(url.includes(".com"));

console.log(myName.split("-"));
