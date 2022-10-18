"use strict";

const form = document.querySelector("#form");
const moneyOwed = document.querySelector(".moneyOwed");

let total = 1000;

moneyOwed.textContent = `$${total}`;

form.addEventListener("submit", (e) => {
  e.preventDefault();

  const userInput = document.querySelector("#money").value;
  //   console.log(userInput);

  const newTotal = total - userInput;
  console.log(newTotal);

  if (newTotal > 0) {
    moneyOwed.textContent = `$${newTotal}`;
  }
});

// remaining money input returns 0
