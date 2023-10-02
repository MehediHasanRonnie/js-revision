// Nullish coalescing Operator(??) null undefine

let val1;
//val1 = 5 ?? 10;
//val1 = null ?? 10;
//val1 = undefined ?? 15;

val1 = null ?? 10 ?? 15;
//console.log(val1);

//ternary operator

//condition? true: false

const coffeePrice = 100;
coffeePrice <= 80 ? console.log("less Than 80") : console.log("more than 80");
