//for off loop
//["","",""]
// [{},{},{},]

const arr = [1, 2, 3, 4, 5, 6];
for (const num of arr) {
  //console.log(num);
}

const greetings = "Hello World!";
for (const greet of greetings) {
  if (greet == " ") {
    // console.log(`breaking point ${greet}`);
    continue;
  }
  // console.log(`Each character of number: ${greet}`);
}

//Map

const map = new Map();
map.set("IPL", "Indian Premier League");
map.set("BPL", "Bangladesh Premier League");
map.set("PCL", "Pakisthani Cricket League");

//console.log(map);

for (const [key, value] of map) {
  console.log(key + ":-" + value);
}
