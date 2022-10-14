"use strict";

const itemsForSale = [
  {
    name: "Toshiba",
    price: 10,
    description: "It's shiny so you know it's good...",
  },
  {
    name: "Gaming Laptop",
    price: 100,
    description: "It's shiny so you know it's good...",
  },
];

// selectors
const itemsContainer = document.querySelector(".items-for-sale");

const cart = [];

itemsContainer.addEventListener("click", (e) => {
  if (e.target.classList.contains("product")) {
    cart.push(itemsForSale[0]);
    const sum = cart.reduce(
      (previousValue, currentValue) => previousValue + currentValue.price,
      0
    );
    console.log(sum); // logs 6
    console.log(cart);
  }
});
