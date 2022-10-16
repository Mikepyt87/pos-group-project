"use strict";

// check-list
// A list of products that have properties for name, category, description, and price.✓
// There must at least 10 different products.✓
// Present a menu to the user and let them choose an item or items to purchase.✓
//  The item(s) the user will buy will be added to a cart until they are ready for checkout.✓
// Provide a way for the user to check out and view their cart.✓
// Give the subtotal, sales tax, and the total.✓

// If the user is paying in cash, ask for the amount tendered and provide change.

// If the user is paying with a card, ask for the card number, expiration, and CVV.

// Provide a receipt for the payment which includes the item(s) bought, the subtotal, total, and anything else of interest.

// A stretch goal is to implement validation for credit card numbers...

// Aarrays
const catalog = [
  {
    category: "Laptop",
    name: "Apple Macbook",
    price: 1200.0,
    img: "assets/laptopMacbook.svg",
    alt: "Apple Macbook laptop",
    description: "It's shing so you know it's good...",
  },
  {
    category: "Laptop",
    name: "Razr Stealth Blade",
    price: 2499.0,
    img: "assets/razerLaptop 1.svg",
    alt: "Razr Stealth Blade laptop",
    description: "It's got a light up keyboard need I say more...",
  },
  {
    category: "Laptop",
    name: "Razr Gametop",
    price: 450.0,
    img: "assets/gamertop.svg",
    alt: "Razr Gametop laptop",
    description: "Only computer gamers should use. Besides the previous 2.",
  },
  {
    category: "Headphones",
    name: "Astro A40",
    price: 175.0,
    img: "assets/headphonesAstroA40.svg",
    alt: "Astro A40 headphones",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum laboriosam ducimus amet ipsum totam fugiat dolore ex nulla impedit. Vitae pariatur architecto nobis? Repellendus voluptate est doloribus veniam quaerat eaque!",
  },
  {
    category: "Headphones",
    name: "Astro A30",
    price: 125.0,
    img: "assets/headphonesAstroA30.svg",
    alt: "Astro A30 laptop",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum laboriosam ducimus amet ipsum totam fugiat dolore ex nulla impedit. Vitae pariatur architecto nobis? Repellendus voluptate est doloribus veniam quaerat eaque!",
  },
  {
    category: "Headphones",
    name: "Logitech Zero",
    price: 89.99,
    img: "assets/heaphonesLogitechZero.svg",
    alt: "Logitech Zero headphones",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum laboriosam ducimus amet ipsum totam fugiat dolore ex nulla impedit. Vitae pariatur architecto nobis? Repellendus voluptate est doloribus veniam quaerat eaque!",
  },
  {
    category: "Headphones",
    name: "Logitech Headset",
    price: 99.99,
    img: "assets/headphonesLogitechHeadset.svg",
    alt: "Logitech Headset",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum laboriosam ducimus amet ipsum totam fugiat dolore ex nulla impedit. Vitae pariatur architecto nobis? Repellendus voluptate est doloribus veniam quaerat eaque!",
  },
  {
    category: "Headphones",
    name: "Sony Gamer",
    price: 75.0,
    img: "assets/gamerset.svg",
    alt: "Sony Gamer headphones",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum laboriosam ducimus amet ipsum totam fugiat dolore ex nulla impedit. Vitae pariatur architecto nobis? Repellendus voluptate est doloribus veniam quaerat eaque!",
  },
  {
    category: "Graphics Cards",
    name: "NVidia RTX4090",
    price: 1599.0,
    img: "assets/gpuRTX4090.svg",
    alt: "NVidia RTX4090 graphics card",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum laboriosam ducimus amet ipsum totam fugiat dolore ex nulla impedit. Vitae pariatur architecto nobis? Repellendus voluptate est doloribus veniam quaerat eaque!",
  },

  {
    category: "Tablet",
    name: "Generic Roblox",
    price: 75.0,
    img: "assets/tabletRoblox.svg",
    alt: "Generic Roblox tablet",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum laboriosam ducimus amet ipsum totam fugiat dolore ex nulla impedit. Vitae pariatur architecto nobis? Repellendus voluptate est doloribus veniam quaerat eaque!",
  },
];

const fakeCartArray = [];

// Cart page----------------------------------------------------------------------

// add cart array to page
// selectors
const productsInCart = document.querySelector("#productsInCart");

const cartToHTML = () => {
  // clear everything in the element before we rebuild:
  productsInCart.innerHTML = "";

  // loop through fakeCartArray, rebuild HTML:
  fakeCartArray.forEach((item) => {
    // create elements
    const productCheckout = document.createElement("div");
    const productNameCheckout = document.createElement("p");
    const productPriceCheckout = document.createElement("p");
    const productImageCheckout = document.createElement("img");

    // modify elements
    // style:
    productCheckout.classList.add("productCheckout");
    productNameCheckout.classList.add("productNameCheckout");
    productPriceCheckout.classList.add("productPriceCheckout");
    productImageCheckout.classList.add("productImageCheckout");

    // Attribute:
    productImageCheckout.setAttribute("src", item.img);
    productImageCheckout.setAttribute("alt", item.alt);

    // values (text-content)
    productNameCheckout.textContent = item.name;
    productPriceCheckout.textContent = `$${item.price}`;

    // add (append) elements to HTML:
    productCheckout.append(
      productImageCheckout,
      productNameCheckout,
      productPriceCheckout
    );
    productsInCart.append(productCheckout);
  });
};
cartToHTML();

// add up prices to generate subtotal, tax, and total
// array method reduce(); (allows to add up all values in an array)

// selectors
const subtotalText = document.querySelector("#subtotal");
const taxText = document.querySelector("#tax");
const totalText = document.querySelector("#total");

const subtotal = () => {
  const priceSum = fakeCartArray.reduce(function (acc, obj) {
    return acc + obj.price;
  }, 0);

  const tax = priceSum * 0.06;
  const taxResult = tax.toFixed(2);

  const total = priceSum + tax;
  const totalResult = total.toFixed(2);

  subtotalText.textContent = `Subtotal: $${priceSum}`;
  taxText.textContent = `Tax: $${taxResult}`;
  totalText.textContent = `Total: $${totalResult}`;
};
subtotal();

// make checkout button switch to payment information page------------------------
// selectors
const body = document.querySelector("body");
const shippingInfo = document.querySelector("#shippingInfo");
const checkout = document.querySelector("#checkout");

body.addEventListener("click", (e) => {
  console.dir(e.target);
  if (e.target.classList.contains("checkoutButton")) {
    console.dir(e.target);
    checkout.style.display = "none";
    shippingInfo.style.display = "block";
  }

  // if (e.target.id === "cartBackArrow") {
  //   // console.log(e.target.id);
  //   checkout.style.display = "none";
  // }
});

// Home store page----------------------------------------------------------------

// add catalog array to home store page
// selectors
const product = document.querySelector("#product");
const productCatalog = document.querySelector("#productCatalog");
const storeHome = document.querySelector("#storeHome");

const catalogToHTML = () => {
  // clear everything in the element before we rebuild:
  productCatalog.innerHTML = "";

  // loop through fakeCartArray, rebuild HTML:
  catalog.forEach((item, index) => {
    // create elements
    const product = document.createElement("div");
    const productName = document.createElement("p");
    const productPrice = document.createElement("p");
    const productImage = document.createElement("img");
    const productDescription = document.createElement("p");
    const addToCart = document.createElement("button");

    // modify elements
    // style:
    product.classList.add("product");
    productName.classList.add("productName");
    productPrice.classList.add("productPrice");
    productImage.classList.add("productImage");
    addToCart.classList.add("addToCart");

    // Attribute:
    // add imgage src & alt here
    productImage.setAttribute("src", item.img);
    productImage.setAttribute("alt", item.alt);
    addToCart.setAttribute("data-index", index);

    // values (text-content)
    productName.textContent = item.name;
    productPrice.textContent = `$${item.price}`;
    productDescription.textContent = item.description;
    addToCart.textContent = "Add to cart";

    // add (append) elements to HTML:
    product.append(
      productImage,
      productName,
      productDescription,
      productPrice,
      addToCart
    );
    productCatalog.append(product);
  });
};
catalogToHTML();

let foundIndex = null;

storeHome.addEventListener("click", (e) => {
  //   console.dir(e.target.id);

  //   console.log(foundIndex);
  if (e.target.classList.contains("addToCart")) {
    // popup.style.display = "block";
    foundIndex = e.target.getAttribute("data-index");
    console.log(foundIndex);
    console.log("add to cart button was clicked");
    fakeCartArray.unshift(catalog[foundIndex]);
    console.log(fakeCartArray);
  }
  //   catalog.splice(foundIndex, 1); // deletes from catalog. Maybe good for quantity
  // console.log(catalog);
  catalogToHTML();
  cartToHTML();
  subtotal();
});

// make cart image clickable

body.addEventListener("click", (e) => {
  // console.dir(e.target);
  if (e.target.classList.contains("fa-cart-shopping")) {
    console.dir(e.target);
    checkout.style.display = "block";
  }

  if (e.target.id === "cartBackArrow") {
    // console.log(e.target.id);
    checkout.style.display = "none";
  }
});

// Payment information page------------------------------------------------------------------------------

// always repeat at end to update-------------------------------------------------
catalogToHTML();
cartToHTML();
subtotal();
