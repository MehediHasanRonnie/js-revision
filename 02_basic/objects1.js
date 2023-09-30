//singleton
//object literals
const syms = Symbol("key1");
const jsUser = {
  name: "Mehedi",
  [syms]: "my Symbol",
  age: 18,
  location: "Dhaka",
  email: "mehedi@google.com",
  isLoogedIn: false,
  lastLoginDays: ["monday", "Saturday"],
};

// console.log(jsUser.email);
// console.log(jsUser["email"]);
// console.log(typeof jsUser[syms]);

jsUser.email = "mehedi@gmail.com";
//Object.freeze(jsUser);
jsUser.email = "mehedi@chatgpt.com";
//console.log(jsUser);

jsUser.grettings = function () {
  console.log("Hello Js users");
};
jsUser.grettingsTwo = function () {
  console.log(`Hello Js users from ${this.name}`);
};
console.log(jsUser.grettings());
console.log(jsUser.grettingsTwo());
