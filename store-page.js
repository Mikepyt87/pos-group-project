"use strict";

// const itemsForSale = [
//   {
//     name: "Toshiba",
//     price: 10,
//     description: "It's shiny so you know it's good...",
//   },
//   {
//     name: "Gaming Laptop",
//     price: 100,
//     description: "It's shiny so you know it's good...",
//   },
// ];

// // selectors
// const itemsContainer = document.querySelector(".items-for-sale");

// const cart = [];

// itemsContainer.addEventListener("click", (e) => {
//   if (e.target.classList.contains("product")) {
//     cart.push(itemsForSale[0]);
//     const sum = cart.reduce(
//       (previousValue, currentValue) => previousValue + currentValue.price,
//       0
//     );
//     console.log(sum); // logs 6
//     console.log(cart);
//   }
// });
const catalog = [
  {
    productType: "Laptop",
    brand: "Apple",
    model: "Macbook",
    cost: "1200.00",
    quantity: 4,
    img: "/assets/gamertop.svg",
    alt: "laptop",
    description: "It's shing so you know it's good...",
  },
  {
    productType: "Laptop",
    brand: "Razr",
    model: "Stealth Blade",
    cost: "2499.00",
    quantity: 2,
    img: "/assets/gamertop.svg",
    alt: "laptop",
    description: "It's got a light up keyboard need I say more...",
  },
  {
    productType: "Laptop",
    brand: "Razr",
    model: "Gametop",
    cost: "450.00",
    quantity: 3,
    img: "/assets/gamertop.svg",
    alt: "laptop",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum laboriosam ducimus amet ipsum totam fugiat dolore ex nulla impedit. Vitae pariatur architecto nobis? Repellendus voluptate est doloribus veniam quaerat eaque!",
  },
  {
    productType: "Headphones",
    brand: "Astro",
    model: "A40",
    cost: "175.00",
    quantity: 5,
    img: "/assets/gamertop.svg",
    alt: "laptop",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum laboriosam ducimus amet ipsum totam fugiat dolore ex nulla impedit. Vitae pariatur architecto nobis? Repellendus voluptate est doloribus veniam quaerat eaque!",
  },
  {
    productType: "Headphones",
    brand: "Astro",
    model: "A30",
    cost: "125.00",
    quantity: 3,
    img: "/assets/gamertop.svg",
    alt: "laptop",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum laboriosam ducimus amet ipsum totam fugiat dolore ex nulla impedit. Vitae pariatur architecto nobis? Repellendus voluptate est doloribus veniam quaerat eaque!",
  },
  {
    productType: "Headphones",
    brand: "Logitech",
    model: "Zero",
    cost: "89.99",
    quantity: 3,
    img: "/assets/gamertop.svg",
    alt: "laptop",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum laboriosam ducimus amet ipsum totam fugiat dolore ex nulla impedit. Vitae pariatur architecto nobis? Repellendus voluptate est doloribus veniam quaerat eaque!",
  },
  {
    productType: "Headphones",
    brand: "Logitech",
    model: "Headset",
    cost: "99.99",
    quantity: 4,
    img: "/assets/gamertop.svg",
    alt: "laptop",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum laboriosam ducimus amet ipsum totam fugiat dolore ex nulla impedit. Vitae pariatur architecto nobis? Repellendus voluptate est doloribus veniam quaerat eaque!",
  },
  {
    productType: "Headphones",
    brand: "Sony",
    model: "Gamer",
    cost: "75.00",
    quantity: 6,
    img: "/assets/gamertop.svg",
    alt: "laptop",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum laboriosam ducimus amet ipsum totam fugiat dolore ex nulla impedit. Vitae pariatur architecto nobis? Repellendus voluptate est doloribus veniam quaerat eaque!",
  },
  {
    productType: "Graphics Cards",
    brand: "NVidia",
    model: "RTX4090",
    cost: "1599.00",
    quantity: 2,
    img: "/assets/gamertop.svg",
    alt: "laptop",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum laboriosam ducimus amet ipsum totam fugiat dolore ex nulla impedit. Vitae pariatur architecto nobis? Repellendus voluptate est doloribus veniam quaerat eaque!",
  },
  {
    productType: "Tablet",
    brand: "Generic",
    model: "Roblox",
    cost: "75.00",
    quantity: 8,
    img: "/assets/gamertop.svg",
    alt: "laptop",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum laboriosam ducimus amet ipsum totam fugiat dolore ex nulla impedit. Vitae pariatur architecto nobis? Repellendus voluptate est doloribus veniam quaerat eaque!",
  },
];

// selectors
const productsContainer = document.querySelector(".products-container");

const buildProducts = () => {
  // clear everything in the ul before we rebuild:
  productsContainer.innerHTML = "";
  // loop through productsContainer, rebuild HTML:
  catalog.forEach((item) => {
    // create elements
    const newProduct = document.createElement("div");
    const newImg = document.createElement("img");
    const newDiv = document.createElement("div");
    const productName = document.createElement("p");
    const productCost = document.createElement("p");
    const productDescription = document.createElement("p");

    // modify elements
    // style
    newProduct.classList.add("product"); //
    newDiv.classList.add("name-price");
    productDescription.classList.add("description");
    newImg.classList.add("product-images");

    // Attribute
    newImg.setAttribute("src", item.img);
    newImg.setAttribute("alt", item.alt);

    // values (text content)
    productName.textContent = item.model;
    productCost.textContent = item.cost;
    productDescription.textContent = item.description;

    // add elements to HTML
    newProduct.append(newImg, newDiv, productDescription);
    newDiv.append(productName, productCost);
    productsContainer.append(newProduct);
  });
};

//call upon page loading initially
buildProducts();
