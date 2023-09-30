//Singleton objects
//const tinderUser = new Object();

const tinderUser = {};

tinderUser.id = "123abc";
tinderUser.name = "Kaista";
tinderUser.isLoogedIn = false;
//console.log(tinderUser);

const regularUser = {
  email: "someone@gmail.com",
  fullname: {
    userFullName: {
      firstName: "Mehedi",
      lastName: "Hasan",
    },
  },
};
//console.log(regularUser.fullname.userFullName.lastName);

const obj1 = { 1: "a", 2: "b" };
const obj2 = { 3: "c", 4: "d" };
const obj3 = { 5: "e", 6: "f" };
// const obj4 = Object.assign({}, obj1, obj2, obj3);
const obj4 = { ...obj1, ...obj2 };
//console.log(obj4);

const users = [
  {
    id: 1,
    name: "Mehedi",
  },
  {
    id: 2,
    name: "Mehedi",
  },
  {
    id: 3,
    name: "Mehedi",
  },
];
users[1].id;
console.log(tinderUser);
console.log(Object.keys(tinderUser));
console.log(Object.values(tinderUser));
console.log(tinderUser.hasOwnProperty("isLoggedIn"));
