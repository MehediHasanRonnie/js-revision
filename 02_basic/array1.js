//***************************Array********************/

const myArr = [0, 2, 3, 4, 6, 7];
// const myHeros = ["ironMan", "captain america", " doctor Strange"];
// const array = Array(1, 2, 3, 4, 5, null);
// myArr.push(6);
// myArr.push(7);
// myArr.pop();
// myArr.unshift(10);
// myArr.shift();
// console.log(myArr.includes(8));
// console.log(myArr.indexOf(3));

// const newArr = myArr.join();
// console.log(myArr);
// console.log(newArr);

console.log("A", myArr);

const myNewArr1 = myArr.slice(1, 3);
console.log(myNewArr1);
console.log("B", myArr);

const myNewArr2 = myArr.splice(1, 3);
console.log(myNewArr2);
console.log("C", myArr);
