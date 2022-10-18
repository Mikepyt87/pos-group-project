"use strict";

// check-list
// A list of products that have properties for name, category, description, and price.✓
// There must at least 10 different products.✓
// Present a menu to the user and let them choose an item or items to purchase.✓
//  The item(s) the user will buy will be added to a cart until they are ready for checkout.✓
// Provide a way for the user to check out and view their cart.✓
// Give the subtotal, sales tax, and the total.✓

// If the user is paying in cash, ask for the amount tendered and provide change.✓

// If the user is paying with a card, ask for the card number, expiration, and CVV.✓

// Provide a receipt for the payment which includes the item(s) bought, the subtotal, total, and anything else of interest.

// add required at the end of all input elements

// A stretch goal is to implement validation for credit card numbers...

// Aarrays
const catalog = [
  {
    category: "Laptop",
    brand: "ASUS",
    model: "BR1100CKA-YS02",
    price: 99.99,
    img: "assets/ASUS.png",
    alt: "ASUS laptop",
    description: "Built to military-grade standards...",
  },
  {
    category: "Laptop",
    brand: "Apple",
    model: "MacBook Pro 2021",
    price: 4299.99,
    img: "assets/Macbook.png",
    alt: "Apple MacBook Pro",
    description: "The first notebook of its kind...",
  },
  {
    category: "Laptop",
    brand: "ASUS",
    model: "Vivobook M1603QA",
    price: 699.99,
    img: "assets/ASUSVIVO.png",
    alt: "Asus Vivobook laptop",
    description: "Makes it easy to get things done...",
  },
  {
    category: "Headphones",
    brand: "Logitech",
    model: "G733 LIGHTSPEED",
    price: 175.99,
    img: "assets/logitech.png",
    alt: "Astro A40 headphones",
    description: "Designed to suit your style...",
  },
  {
    category: "Headphones",
    brand: "Apple",
    model: "AirPods Max",
    price: 499.99,
    img: "assets/airpodsMax.png",
    alt: "Apple AirPods Max Headphones",
    description: "Dynamic driver provides high-fidelity audio...",
  },
  {
    category: "Headphones",
    brand: "HyperX",
    model: "Cloud Core Wired",
    price: 34.99,
    img: "assets/hyper.png",
    alt: "HyperX Cloud Core Wired Headphones",
    description: "Known for its legendary sound...",
  },
  {
    category: "Motherboard",
    brand: "GIGABYTE",
    model: "Z690 AORUS ELITE",
    price: 199.99,
    img: "assets/motherboard.png",
    alt: "Gigabyte Z690 Aorus Elite Motherboard",
    description: "The King of Gaming is here...",
  },
  {
    category: "Graphics Card",
    brand: "NVIDIA",
    model: "GeForce RTX 4090",
    price: 1599.99,
    img: "assets/gpu.png",
    alt: "NVIDIA GeForce RTX 4090 Graphics Card",
    description: "An enormous leap in performance...",
  },
  {
    category: "CPU",
    brand: "Intel",
    model: "Core i9-12900K",
    price: 1599.0,
    img: "assets/cpu.png",
    alt: "Intel Core i9-12900K Central processing unit",
    description: "Compatible with the latest platform innovation...",
  },

  {
    category: "RAM",
    brand: "CORSAIR",
    model: "Vengeance RGB Pro",
    price: 507.99,
    img: "assets/ram.png",
    alt: "Corsair RAM",
    description: "Dynamic Multi-Zone RGB Lighting...",
  },
];

const fakeCartArray = [];

// const userLocationInfo = [];

const userCreditCardInfo = [];

// selectors--------------------------------------------------------------------------------
// container that holds products in cart
const productsInCart = document.querySelector("#productsInCart");

// text within cart to add up all prices of products selected and display in HTML
const subtotalText = document.querySelector("#subtotal");
const taxText = document.querySelector("#tax");
const totalText = document.querySelector("#total");

// selecting different containers
const header = document.querySelector("header");
const body = document.querySelector("body"); // selector for all content (might use for fewer eventListeners)
const checkout = document.querySelector("#checkout"); // selector to display none or block
const shippingInfo = document.querySelector(".shippingAndBillingInfo"); // selector to display none or block

// const product = document.querySelector("#product"); // might be extra
const productCatalog = document.querySelector("#productCatalog"); // selected to remove inner HTML and append new elements to.
const storeHome = document.querySelector("#storeHome"); // added eventlistener to

const saveBillingAddress = document.querySelector("#save_billing_address");

const confirmationNumber = document.querySelector("#confirmationNumber"); // text to display in HTML
const datePlaced = document.querySelector("#datePlaced"); // text to display in HTML
const poAccount = document.querySelector("#poAccount"); // text to display in HTML
const confirmationSubtotal = document.querySelector("#confirmationSubtotal");
const confirmationTax = document.querySelector("#confirmationTax");
const confirmationTotal = document.querySelector("#confirmationTotal"); // text to display in HTML
const deliveryAddress = document.querySelector("#deliveryAddress");
const cashTotal = document.querySelector(".cashTotal");
const changeDue = document.querySelector(".changeDue");
const cashOption = document.querySelector(".cashOption");
const creditOption = document.querySelector(".creditOption");
const credtCardOption = document.querySelector(".credtCardOption");
const orderConfirmation = document.querySelector(".orderConfirmation");
const amountReturned = document.querySelector(".amountReturned");
const shoppingCart = document.querySelector(".fa-cart-shopping");
const paymentOption = document.querySelector(".paymentOption");
const productsPurchased = document.querySelector(".productsPurchased");
const cartTally = document.querySelector(".cartTally");

// display product arrays on page-----------------------------------------------------------
const catalogAndCartToHTML = () => {
  // clear everything in the element before we rebuild:
  productCatalog.innerHTML = "";

  // loop through fakeCartArray, rebuild HTML:
  catalog.forEach((item, index) => {
    // create elements
    const product = document.createElement("div");
    const productImage = document.createElement("img");
    const nameAndPrice = document.createElement("div");
    const brandAndModel = document.createElement("div");
    const productBrand = document.createElement("p");
    const productModel = document.createElement("p");
    const productPrice = document.createElement("p");
    const productDescription = document.createElement("p");
    const addToCart = document.createElement("button");

    // modify elements
    // style:
    product.classList.add("product");
    productImage.classList.add("productImage");
    nameAndPrice.classList.add("nameAndPrice");
    brandAndModel.classList.add("brandAndModel");
    productBrand.classList.add("productBrand");
    productModel.classList.add("productModel");
    productPrice.classList.add("productPrice");
    productDescription.classList.add("description");
    addToCart.classList.add("addToCart");

    // Attribute:
    // add imgage src & alt here
    productImage.setAttribute("src", item.img);
    productImage.setAttribute("alt", item.alt);
    addToCart.setAttribute("data-index", index);

    // values (text-content)
    productBrand.textContent = item.brand;
    productModel.textContent = item.model;
    productPrice.textContent = `$${item.price}`;
    productDescription.textContent = item.description;
    addToCart.textContent = "Add to cart";

    // add (append) elements to HTML:
    brandAndModel.append(productBrand, productModel);
    nameAndPrice.append(brandAndModel, productPrice);
    product.append(productImage, nameAndPrice, productDescription, addToCart);
    productCatalog.append(product);
  });
  productsInCart.innerHTML = "";

  // loop through fakeCartArray, rebuild HTML:
  fakeCartArray.forEach((item) => {
    // create elements
    const productCheckout = document.createElement("div");
    const productImageCheckout = document.createElement("img");
    const nameDescriptionPrice = document.createElement("div");
    const brandAndModelCheckout = document.createElement("div");
    const productBrandCheckout = document.createElement("p");
    const productModelCheckout = document.createElement("p");
    const productDescriptionCheckout = document.createElement("p");
    const productPriceCheckout = document.createElement("p");

    // modify elements
    // style:
    productCheckout.classList.add("productCheckout");
    productImageCheckout.classList.add("productImageCheckout");
    nameDescriptionPrice.classList.add("name-description-price");
    brandAndModelCheckout.classList.add("brandAndModelCheckout");
    productBrandCheckout.classList.add("productBrandCheckout");
    productModelCheckout.classList.add("productModelCheckout");
    productDescriptionCheckout.classList.add("productDescriptionCheckout");
    productPriceCheckout.classList.add("productPriceCheckout");

    // Attribute:
    productImageCheckout.setAttribute("src", item.img);
    productImageCheckout.setAttribute("alt", item.alt);

    // values (text-content)
    productBrandCheckout.textContent = item.brand;
    productModelCheckout.textContent = item.model;
    productDescriptionCheckout.textContent = item.description;
    productPriceCheckout.textContent = `$${item.price}`;

    // add (append) elements to HTML:
    brandAndModelCheckout.append(productBrandCheckout, productModelCheckout);
    nameDescriptionPrice.append(
      brandAndModelCheckout,
      productDescriptionCheckout,
      productPriceCheckout
    );
    productCheckout.append(productImageCheckout, nameDescriptionPrice);
    productsInCart.append(productCheckout);
  });
};
catalogAndCartToHTML();

const orderConfirmationtoHTML = () => {
  fakeCartArray.forEach((item) => {
    // create elements
    const productPurchased = document.createElement("div");
    const productImagePurchased = document.createElement("img");
    const nameDescriptionPurchased = document.createElement("div");
    const brandAndModelPurchased = document.createElement("div");
    const productBrandPurchased = document.createElement("p");
    const productModelPurchased = document.createElement("p");
    const productDescriptionPurchased = document.createElement("p");
    const productPricePurchased = document.createElement("p");

    // modify elements
    // style:
    productPurchased.classList.add("productCheckout");
    productImagePurchased.classList.add("productImageCheckout");
    nameDescriptionPurchased.classList.add("name-description-price");
    brandAndModelPurchased.classList.add("brandAndModelCheckout");
    productBrandPurchased.classList.add("productBrandCheckout");
    productModelPurchased.classList.add("productModelCheckout");
    productDescriptionPurchased.classList.add("productDescriptionCheckout");
    productPricePurchased.classList.add("productPriceCheckout");

    // Attribute:
    productImagePurchased.setAttribute("src", item.img);
    productImagePurchased.setAttribute("alt", item.alt);

    // values (text-content)
    productBrandPurchased.textContent = item.brand;
    productModelPurchased.textContent = item.model;
    productDescriptionPurchased.textContent = item.description;
    productPricePurchased.textContent = `$${item.price}`;

    // add (append) elements to HTML:
    brandAndModelPurchased.append(productBrandPurchased, productModelPurchased);
    nameDescriptionPurchased.append(
      brandAndModelPurchased,
      productDescriptionPurchased,
      productPricePurchased
    );
    productPurchased.append(productImagePurchased, nameDescriptionPurchased);
    productsPurchased.append(productPurchased);
  });
};
orderConfirmationtoHTML();

// calculate and display total in cart
const subtotal = () => {
  const priceSum = fakeCartArray.reduce((acc, obj) => {
    return acc + obj.price;
  }, 0);

  const subtotal = priceSum.toFixed(2);

  const tax = priceSum * 0.06;
  const taxResult = tax.toFixed(2); // toFixed() rounds number to # of decimal places

  const total = priceSum + tax;
  const totalResult = total.toFixed(2); // toFixed() rounds number to # of decimal places

  // adding .cart values to HTML text
  subtotalText.textContent = `Subtotal: $${subtotal}`;
  taxText.textContent = `Tax: $${taxResult}`;
  totalText.textContent = `Total: $${totalResult}`;
  // editing text inside of order confirmation
  confirmationSubtotal.textContent = `$${subtotal}`;
  confirmationTax.textContent = `$${taxResult}`;
  confirmationTotal.textContent = `$${totalResult}`;
  // cash
  cashTotal.textContent = `$${totalResult}`;
};

cashOption.addEventListener("submit", (e) => {
  e.preventDefault();

  const priceSum = fakeCartArray.reduce((acc, obj) => {
    return acc + obj.price;
  }, 0);

  const total = priceSum * 1.06;

  const tenderedContainer = document.querySelector("#cashOption").value;
  // console.log(tenderedContainer);
  const cashReturned = tenderedContainer - total;
  const roundedCashReturned = cashReturned.toFixed(2);
  const roundedParsedCashReturned = parseFloat(roundedCashReturned);

  // console.log(roundedParsedCashReturned);

  if (roundedParsedCashReturned < 0) {
    cashTotal.style.display = "none";
    changeDue.textContent = "You still owe us $" + roundedCashReturned * -1;
    console.log("You owe us more money!");
    console.log(roundedParsedCashReturned);
  } else if (roundedParsedCashReturned > 0) {
    amountReturned.textContent = `Returned $${roundedParsedCashReturned} back to patron`;
    paymentOption.textContent = "Cash";
    cashOption.style.display = "none";
    orderConfirmation.style.display = "block";

    console.log(roundedParsedCashReturned);
  } else {
    paymentOption.textContent = "Cash";
    cashOption.style.display = "none";
    orderConfirmation.style.display = "block";

    console.log(roundedParsedCashReturned);
  }
  orderConfirmationtoHTML();
});

creditOption.addEventListener("submit", (e) => {
  e.preventDefault();

  orderConfirmation.style.display = "block";
  creditOption.style.display = "none";
  paymentOption.textContent = "Credit";
  orderConfirmationtoHTML();
});

header.addEventListener("click", (e) => {
  // open shopping cart button
  if (
    e.target.classList.contains("fa-cart-shopping") ||
    e.target.classList.contains("cartTally")
  ) {
    // console.dir(e.target);
    checkout.style.display = "block";
    storeHome.style.display = "none";
    shoppingCart.style.display = "none";
    cartTally.style.display = "none";
  }
});

let foundIndex = null;

body.addEventListener("click", (e) => {
  // console.dir(e.target);

  // add to cart button
  if (e.target.classList.contains("addToCart")) {
    // console.dir(e.target);
    // popup.style.display = "block";
    foundIndex = e.target.getAttribute("data-index");
    // console.log(foundIndex);
    // console.log("add to cart button was clicked");
    fakeCartArray.unshift(catalog[foundIndex]);
    // console.log(fakeCartArray);
    cartTally.textContent = fakeCartArray.length;
    if (fakeCartArray.length >= 10) {
    }
  }

  // return to home page from shopping cart button
  if (e.target.id === "cartBackArrow") {
    // console.log(e.target.id);
    checkout.style.display = "none";
    storeHome.style.display = "block";
    shoppingCart.style.display = "block";
    cartTally.style.display = "block";
  }

  if (e.target.id === "shippingBackArrow") {
    // console.log(e.target.id);
    checkout.style.display = "block";
    shippingInfo.style.display = "none";
  }

  if (e.target.id === "cashBackArrow") {
    cashOption.style.display = "none";
    shippingInfo.style.display = "block";
  }

  if (e.target.id === "creditBackArrow") {
    creditOption.style.display = "none";
    shippingInfo.style.display = "block";
  }

  // checkout button
  if (e.target.classList.contains("checkoutButton")) {
    // console.dir(e.target);
    if (fakeCartArray.length > 0) {
      checkout.style.display = "none";
      shippingInfo.style.display = "block";
    }
  }
  catalogAndCartToHTML();
  subtotal();
});

shippingInfo.addEventListener("submit", (e) => {
  e.preventDefault(); // prevents reload

  const inputEmail = document.querySelector("#e-mail").value;
  const inputFirstName = document.querySelector("#first_name").value;
  const inputLastName = document.querySelector("#last_name").value;
  const inputAddressLine1 = document.querySelector("#address_line1").value;
  const inputAddressLine2 = document.querySelector("#address_line2").value;
  const inputState = document.querySelector("#state").value;
  const inputCity = document.querySelector("#city").value;
  const inputZip = document.querySelector("#zip_code").value;

  // console.log(
  //   inputEmail,
  //   inputFirstName,
  //   inputLastName,
  //   inputAddressLine1,
  //   inputAddressLine2,
  //   inputState,
  //   inputCity,
  //   inputZip
  // );

  deliveryAddress.textContent = `${inputFirstName} ${inputLastName}, ${inputAddressLine1}, ${inputState} ${inputZip}`;

  const credit = document.querySelector("#credit").checked;
  if (credit) {
    creditOption.style.display = "block";
    shippingInfo.style.display = "none";
    // console.log("hi");
  } else {
    cashOption.style.display = "block";
    shippingInfo.style.display = "none";
    // console.log("bye");
  }
});

const makeConfirmationNumber = () => {
  // generate random strings for confirmation# and P.O. Account#
  let result1 = "";
  let result2 = "";
  const characters = "0123456789";
  const poCharacters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789";
  const charactersLength = characters.length;
  const poCharactersLength = poCharacters.length;
  for (let i = 0; i < 8; i++) {
    result1 += characters.charAt(Math.floor(Math.random() * charactersLength));
    result2 += poCharacters.charAt(
      Math.floor(Math.random() * poCharactersLength)
    );
  }

  // get todays date for date placed
  const date = new Date();
  let month = date.getMonth() + 1;
  let day = date.getDate();
  let year = date.getFullYear();

  // values (text-content)
  confirmationNumber.textContent = result1;
  datePlaced.textContent = `${month}/${day}/${year}`;
  poAccount.textContent = result2;
};
makeConfirmationNumber();

// always repeat at end to update-------------------------------------------------
catalogAndCartToHTML();
// subtotal();
