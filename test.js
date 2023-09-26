const userId = 1290272;
let userName = "Mehedi Hasan";
var userEmail = "mehedi@google.com";
userCity = "Dhaka";
let userState =
  /*
prefere not to use var because it has issue 
with block scope and functional scope
 */
  // userId = 1701010048;
  console.table([userId, userName, userEmail, userCity, userState]);
