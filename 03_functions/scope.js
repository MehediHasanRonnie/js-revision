// let a = 10;
// const b = 20;
var c = 300;

if (true) {
  let a = 10;
  const b = 20;
  var c = 30;
}
//console.log(a);
//console.log(b);
//console.log(c);

function one() {
  const userName = "Mehedi";
  function two() {
    const website = "Instagram";
    console.log(userName);
  }
  //console.log(website);
  two();
}
//one();

if (true) {
  const userName = "Hasan";
  if (userName === "Hasan") {
    const website = " Youtube";
    //console.log(userName + website);
  }
  //console.log(website);
}
//console.log(userName);

// *****************************INTERESTING******************
console.log(addOne(1));
function addOne(num1) {
  return num1 + 1;
}

//expression

const addtwo = function (num2) {
  return num2 + 2;
};
console.log(addtwo(2));
