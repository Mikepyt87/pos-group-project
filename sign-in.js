"use strict";

const localStorageDatabase = window.localStorage.getItem("userDatabase");
JSON.parse(localStorageDatabase);
const updatedUserDatabase = JSON.parse(localStorageDatabase);

console.log(updatedUserDatabase);

const signedIn = [];

// selectors
const signInForm = document.querySelector(".sign-in");

signInForm.addEventListener("submit", (e) => {
  e.preventDefault();
  //grab input data
  const inputEMail = document.querySelector("#e-mail").value;
  const inputPassword = document.querySelector("#password").value;
  console.log(inputEMail, inputPassword);

  // uses forEach() to verify sign-in
  updatedUserDatabase.forEach((item) => {
    if (inputEMail === item.eMail) {
      if (inputPassword === item.password) {
        // console.log("Email and password are correct!");
        signedIn.push({ EMail: inputEMail, password: inputPassword });
        // console.log(signedIn);
        window.location.href = "store-page.html";
      }
    }
  });
});
