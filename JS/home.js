const accounts = [
  ["myaccount", "mypassword1"],
  ["myaccount2", "mypassword2"],
];
const loginErrorMsg = "Account ID/Password isn't correct, please enter again.";

const id = document.getElementById("accountId").value;
const password = document.getElementById("password").value;
const submit = document.getElementById("signIn_button");
const signInForm = document.getElementById("info");
let pass = false;
submit.addEventListener("click", signIn)
// remove the onCLick in the html, this listerner does it.

function signIn(e) {
  console.log(id, password)
  if (password && id) {
    signInForm.action = "builder.html";
  }
  else {
    e.stopPropagation();
    document.getElementById("error").innerText = loginErrorMsg;
  }
  
 

  //   let accountSize = accounts.length - 1;
  //   let logInFail = true;
  //   while (accountSize >= 0) {
  //     if (
  //       id === accounts[accountSize][0] &&
  //       password === accounts[accountSize][1]
  //     ) {
  //       console.log("true");
  //       signInForm.action = "builder.html";
  //       logInFail = false;
  //       console.log("sign in success");
  //       break;
  //     }
  //     accountSize--;
  //   }
  //   if (logInFail) {
  //     if (!document.getElementById("signInFail")) {
  //       signInForm.innerHTML +=
  //         "<br><br><p class='signInFail' id='signInFail'>Account ID/Password isn't correct, please enter again.</p>";
  //       signInFail = true;
  //     } else {
  //       signInForm.innerHTML = signInForm.innerHTML;
  //     }
  //     console.log("sign in fail display");
  //   }

  // const signInForm = document.getElementById("info");
  // signInForm.addEventListener("submit", (e) => {
  //   return true;
  // });
//   signInForm.addEventListener("submit", (e) => {
//     accounts.forEach((element) => {
//       if (element[0] === id && element[1] === password) {
//         pass = true;
//       }
//     });
//     if (pass) {
//       signInForm.action = "builder.html";
//     } else {
//       e.stopPropagation();
//       document.getElementById("error").innerText = loginErrorMsg;
//     }
//   });
}

/* for setTimeout and setInterval */

function myIntervalFunction() {
  console.log(count++ + "s has passed.");
}
var count = 0;
var myInterval = setInterval(myIntervalFunction, 1000);

function myTimeoutFunction() {
  clearInterval(myInterval);
}

var myTimeout = setTimeout(myTimeoutFunction, 20000);

const person = {
  firstName: "John",
  lastName: "Doe",
  id: 1234,
  fullName: function () {
    return this.firstName + " " + this.lastName;
  },
};
console.log(person.fullName());
let name = "firstName";
console.log(person["${name}"] + " " + person.lastName);
/*JSON, Parsing, Stringifying*/
console.log(person);
console.log(JSON.stringify(person));
console.log(JSON.parse(JSON.stringify(person)));

let arr = ["a", "b", 3];

arr.forEach((element) => {
  console.log(element);
});

let everything = arr.map((element) => {
  return (element += " is everything");
});

console.log(everything);

console.log(arr.filter((element) => element >= "a"));

console.log(arr.find((element) => element >= "a"));

console.log(arr.findIndex((element) => element >= "a"));

console.log(arr.reduce((final, element) => (final += "-" + element)));

console.log(arr.some((element) => element >= "a"));

let myPromise = new Promise(function (err, value) {
  let x = 1;
  if (x == 0) {
    value("Ok");
  } else {
    err("Error");
  }
});

myPromise.then(
  function (a) {
    console.log(a);
  },
  function (b) {
    console.log(b);
  }
);

async function myDisplay(x) {
  let myPromise = new Promise((resolve, err) => {
    if (x == 1) {
      resolve("My promise");
    }
    else
    {
      err('errrrr');
    }
  });
    console.log(await myPromise);

}

myDisplay(0);

function resolveAfter2Seconds() {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve("resolved");
    }, 2000);
  });
}

async function asyncCall() {
  console.log("calling");
  const result = await resolveAfter2Seconds();
  console.log(result);
  // expected output: "resolved"
}

asyncCall();

