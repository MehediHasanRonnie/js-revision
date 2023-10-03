//filter

const myNumber = [1, 2, 3, 4, 5, 6, 7, 8, 9];

// const newNumber = myNumber.filter((num) => {
//   return num > 4;
// });

// const newNumber = [];
// myNumber.forEach((num) => {
//   if (num < 4) {
//     newNumber.push(num);
//   }
// });
// console.log(newNumber);

const Books = [
  { title: "Book 1", genre: "history", published: 1990, edition: 2015 },
  { title: "Book 2", genre: "Science fiction", published: 1991, edition: 2012 },
  { title: "Book 3", genre: "history", published: 1920, edition: 2020 },
  { title: "Book 4", genre: "Science fiction", published: 1801, edition: 1912 },
];

const userBooks = Books.filter((bk) => bk.genre === "history");
//console.log(userBooks);

//map

const myNumbers = [1, 2, 3, 4, 5, 6, 7, 8];

// const newNums = myNumbers.map((num) => {
//   return num - 3;
// });

const newNums = myNumbers
  .map((num) => num * 10)
  .map((num) => num + 1)
  .filter((num) => num >= 40);
//console.log(newNums);

//reduce
//mostly used in shopping cart

const myNums = [1, 2, 3, 4, 5];

const myTotal = myNums.reduce((accumulator, currentvalue) => {
  console.log(`Accumulator: ${accumulator} , CurrentValue: ${currentvalue}`);
  return accumulator + currentvalue;
}, 10);
console.log(myTotal);
