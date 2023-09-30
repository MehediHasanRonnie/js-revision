//object deStructuring

const cources = {
  name: " Js in Hindi",
  price: 999,
  instructores: "Hitesh Chowdury",
};

const { name, price, instructores: instructor } = cources;
console.log(instructor);
