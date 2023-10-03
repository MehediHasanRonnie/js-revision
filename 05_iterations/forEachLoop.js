//for each loop
const coding = ["javaScript", "C++", "Python", "Ruby", "c"];
//foreact takes a function as peremeter here i took callback arrow fun
coding.forEach((item) => {
  //console.log(item);
});

function printMe(item) {
  //console.log(item);
}
coding.forEach(printMe);

coding.forEach((item, index, arr) => {
  //console.log(item, index, arr);
});

//object in arrays

const myCoading = [
  {
    languageName: "JavaScript",
    languageFileName: "JS",
  },
  {
    languageName: "Python",
    languageFileName: "py",
  },
  {
    languageName: "Ruby",
    languageFileName: "rb",
  },
];
myCoading.forEach((item) => {
  console.log(`${item.languageFileName} :- ${item.languageName}`);
});
