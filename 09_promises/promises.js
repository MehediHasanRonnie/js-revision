//promise 1:
const promiseOne = new Promise(function (resolve, reject) {
  //do an async task
  //Db calls, criptography, network
  setTimeout(function () {
    console.log("async task is completed");
    resolve();
  }, 1000);
});
promiseOne.then(function () {
  console.log("promised consumed");
});
//promise 2:
new Promise((resolve, reject) => {
  setTimeout(() => {
    console.log("async 2 task");
    resolve();
  }, 1000);
}).then(() => {
  console.log("async 2 resolve");
});

//promise 3:

const promiseThree = new Promise(function (resolve, reject) {
  setTimeout(() => {
    resolve({ usernmae: "Mehedi", email: "hasan@gmail.com" });
  }, 1000);
});

promiseThree.then(function (user) {
  console.log(user);
});
//promise 4:
const promisefour = new Promise((res, rej) => {
  setTimeout(() => {
    let error = false;
    if (!error) {
      res({ username: "hasan", email: "mehedi@gmail.com" });
    } else {
      rej("error is occured");
    }
  }, 1000);
});
promisefour
  .then((user) => {
    console.log(user);
    return user.username;
  })
  .then((username) => {
    console.log(username);
  })
  .catch((error) => {
    console.log(error);
  })
  .finally(() => console.log("either promis is resolve or rejected"));
//promise 5:

const promisefive = new Promise((res, rej) => {
  setTimeout(() => {
    let error = true;
    if (!error) {
      res({ username: "javascript", password: 123 });
    } else {
      rej("Error: Js error is occured!");
    }
  }, 1000);
});

async function consumePromiseFive() {
  try {
    const response = await promisefive;
    console.log(response);
  } catch (error) {
    console.log(error);
  }
}
consumePromiseFive();
