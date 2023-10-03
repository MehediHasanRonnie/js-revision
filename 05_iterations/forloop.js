for (let i = 0; i < 10; i++) {
  const element = i;
  if (element == 5) {
    //console.log("5 is the best Number");
  }
  //console.log(element);
}
//nested loop
for (let i = 0; i <= 10; i++) {
  //console.log(`Time Tables: ${i}`);
  for (let j = 0; j <= 10; j++) {
    // console.log(`Inner Loop value: ${j} Inner Loop: ${i}`);
    //console.log(i + "*" + j + "=" + i * j);
  }
}
//loop through Array

let myArray = ["ironamn", "SpiderMan", "Thor"];

for (let index = 0; index < myArray.length; index++) {
  const element = myArray[index];
  //console.log(element);
}

//keywords
//break, continue

for (let i = 1; i < 20; i++) {
  if (i == 5) {
    console.log(`Detected 5`);
    continue;
  }
  console.log(`Value of i is : ${i}`);
}
