const user = {
  userName: "Mehedi",
  id: 999,
  wellcomeMessage: function () {
    console.log(` ${this.userName},wellcome to the website.`);
    //console.log(this);
  },
};
// user.wellcomeMessage();
// user.userName = "Sam";
// user.wellcomeMessage();

// console.log(this);

// function learn() {
//   let userName = "Mehedi";
//   console.log(this.userName);
// }
// learn();

// const addTwo = (num1, num2) => {
//   return num1 + num2;
// };
// console.log(addTwo(2, 3));
//implicit return
//const addTwo = (num1, num2) => num1 + num2;
const addTwo = (num1, num2) => ({ object: "number2" });
//console.log(addTwo);
