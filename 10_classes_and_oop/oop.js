//object literal

// const user = {
//   username: "mehedi",
//   loginCount: 8,
//   signedIn: true,

//   getUserDetails: function () {
//     console.log(`username: ${this.username}`);
//   },
// };
// console.log(user.loginCount);
// console.log(user.getUserDetails());

function User(username, loginCount, isLoogedIn) {
  this.username = username;
  this.loginCount = loginCount;
  this.isLoogedIn = isLoogedIn;
  return this;
}
const userOne = new User("Mehedi", 12, true);

const userTwo = new User("Hasan", 11, false);
console.log(userTwo);
