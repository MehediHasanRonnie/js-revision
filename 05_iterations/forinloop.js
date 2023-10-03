//for in on object
const language = {
  js: "javaScript",
  cpp: "C++",
  rb: "Ruby",
  swift: "Swift By apple",
};

for (const key in language) {
  // console.log(`${key} is shortcut for ${language[key]}`);
}

//for in on array

const programming = ["javaScript", "C++", "Python", "Ruby"];

for (const key in programming) {
  //console.log(key);
}
// map on for in

const map = new Map();
map.set("IPL", "Indian Premier League");
map.set("BPL", "Bangladesh Premier League");
map.set("PCL", "Pakisthani Cricket League");

// for (const key in map) {
//   console.log(key);
// }
