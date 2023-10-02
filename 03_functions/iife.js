//Immediately invoked Function Expression
(function js() {
  //named iife
  console.log(`DB CONNECTION`);
})();
((name) => {
  //unNamed iffie
  console.log(`BD Connection ${name}`);
})("Mehedi");
