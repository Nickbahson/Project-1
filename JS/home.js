function getUserID() {
  return [0, 0];
}

function signIn() {
  const accounts = [
    ["myaccount", "mypassword1"],
    ["myaccount2", "mypassword2"],
  ];
  const id = document.getElementById("accountId").value;
  const password = document.getElementById("password").value;
  currentUser = getUserID();
  let accountSize = accounts.length - 1;
  let logInFail = true;
  while (accountSize >= 0) {
    if (
      id === accounts[accountSize][0] &&
      password === accounts[accountSize][1]
    ) {
      console.log("true");
      signInForm.action = "builder.html";
      logInFail = false;
      console.log('sign in success');
      break;
    }
    accountSize--;
  }
  if (logInFail) {
    if (!document.getElementById("signInFail")) {
      signInForm.innerHTML +=
        "<br><br><p class='signInFail' id='signInFail'>Account ID/Password isn't correct, please enter again.</p>";
      signInFail = true;
    } else {
      signInForm.innerHTML = signInForm.innerHTML;
    }
    console.log('sign in fail display');
  }
}
const signInForm = document.getElementById("info");
