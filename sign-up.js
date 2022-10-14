"use strict";

const userDatabase = [];
console.log(userDatabase);

// 1. User sign-up
// selectors (sign-up.html)
const signUpForm = document.querySelector(".sign-up");
let nextId = 1;

signUpForm.addEventListener("submit", (e) => {
  e.preventDefault();
  //grab input data
  const inputName = document.querySelector("#full-name").value;
  const inputEMail = document.querySelector("#e-mail").value;
  const inputPassword = document.querySelector("#password").value;
  const inputPasswordAgain = document.querySelector("#re-password").value;
  //   console.log(inputName, inputEMail, inputPassword);
  // data-driven approach:
  // update "backend" (user database)
  // THEN database update HTML
  if (inputPassword === inputPasswordAgain) {
    // console.log("passwords are the same");
    userDatabase.push({
      fullName: inputName,
      eMail: inputEMail,
      password: inputPassword,
      id: nextId,
    });
    nextId++;
    console.log(userDatabase);

    // clear form
    const nameInputElement = document.querySelector("#full-name");
    const eMailInputElement = document.querySelector("#e-mail");
    const passwordInputElement = document.querySelector("#password");
    const rePasswordInputElement = document.querySelector("#re-password");
    nameInputElement.value = "";
    eMailInputElement.value = "";
    passwordInputElement.value = "";
    rePasswordInputElement.value = "";
    window.localStorage.setItem("userDatabase", JSON.stringify(userDatabase));
    window.location.href = "sign-in.html";
  } else {
    // console.log("passwords are not the same!");
  }
});
