//function basic
function myName() {
  console.log("M");
  console.log("H");
  console.log("S");
  console.log("A");
  console.log("N");
}
//myName();

// function addTwoNumber(num1, num2) {
//   console.log(num1 + num2);
// }

function addTwoNumber(num1, num2) {
  return num1 + num2;
}
let result = addTwoNumber(5, 6);
//console.log("result:", result);

function userLoginMessage(username) {
  if (!username) {
    console.log("please enter your name");
    return;
  }
  return `${username} just looged in`;
}
//console.log(userLoginMessage("Mehedi"));
//resst operator
function calculateCartPrice(val1, val2, ...num1) {
  return num1;
}
//console.log(calculateCartPrice(200, 400, 600, 800));

//object in function

const user = {
  username: "Mehedi Hasan",
  price: 199,
};

function handleObject(anyobject) {
  console.log(
    `UserName is ${anyobject.username} and the price is ${anyobject.price}`
  );
}
//handleObject(user);
// handleObject({
//   username: "jhon Doe",
//   price: 499,
// });

//Array in function

const newArray = [100, 300, 500, 700, 900];

function returnArrayValue(arrayValue) {
  return arrayValue[2];
}
//console.log(returnArrayValue(newArray));
console.log(returnArrayValue([1000, 2000, 3000, 4000]));
