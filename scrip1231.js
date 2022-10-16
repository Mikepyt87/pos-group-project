"use strict";
const catalog = [
  {
    productType: "Laptop",
    brand: "Apple",
    model: "Macbook",
    cost: "$" + 1200.0,
    quantity: 4,
    img: "assets/laptopMacbook.svg",
    alt: "laptop",
    description: "It's shing so you know it's good...",
  },
  {
    productType: "Laptop",
    brand: "Razr",
    model: "Stealth Blade",
    cost: "$" + 2499.0,
    quantity: 2,
    img: "assets/razerLaptop 1.svg",
    alt: "laptop",
    description: "It's got a light up keyboard need I say more...",
  },
  {
    productType: "Laptop",
    brand: "Razr",
    model: "Gametop",
    cost: "$" + 450.0,
    quantity: 3,
    img: "assets/gamertop.svg",
    alt: "laptop",
    description: "Only computer gamers should use. Besides the previous 2.",
  },
  {
    productType: "Headphones",
    brand: "Astro",
    model: "A40",
    cost: "$" + 175.0,
    quantity: 5,
    img: "assets/headphonesAstroA40.svg",
    alt: "laptop",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum laboriosam ducimus amet ipsum totam fugiat dolore ex nulla impedit. Vitae pariatur architecto nobis? Repellendus voluptate est doloribus veniam quaerat eaque!",
  },
  {
    productType: "Headphones",
    brand: "Astro",
    model: "A30",
    cost: "$" + 125.0,
    quantity: 3,
    img: "assets/headphonesAstroA30.svg",
    alt: "laptop",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum laboriosam ducimus amet ipsum totam fugiat dolore ex nulla impedit. Vitae pariatur architecto nobis? Repellendus voluptate est doloribus veniam quaerat eaque!",
  },
  {
    productType: "Headphones",
    brand: "Logitech",
    model: "Zero",
    cost: "$" + 89.99,
    quantity: 3,
    img: "assets/heaphonesLogitechZero.svg",
    alt: "laptop",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum laboriosam ducimus amet ipsum totam fugiat dolore ex nulla impedit. Vitae pariatur architecto nobis? Repellendus voluptate est doloribus veniam quaerat eaque!",
  },
  {
    productType: "Headphones",
    brand: "Logitech",
    model: "Headset",
    cost: "$" + 99.99,
    quantity: 4,
    img: "assets/headphonesLogitechHeadset.svg",
    alt: "laptop",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum laboriosam ducimus amet ipsum totam fugiat dolore ex nulla impedit. Vitae pariatur architecto nobis? Repellendus voluptate est doloribus veniam quaerat eaque!",
  },
  {
    productType: "Headphones",
    brand: "Sony",
    model: "Gamer",
    cost: "$" + 75.0,
    quantity: 6,
    img: "assets/gamerset.svg",
    alt: "laptop",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum laboriosam ducimus amet ipsum totam fugiat dolore ex nulla impedit. Vitae pariatur architecto nobis? Repellendus voluptate est doloribus veniam quaerat eaque!",
  },
  {
    productType: "Graphics Cards",
    brand: "NVidia",
    model: "RTX4090",
    cost: "$" + 1599.0,
    quantity: 2,
    img: "assets/gpuRTX4090.svg",
    alt: "laptop",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum laboriosam ducimus amet ipsum totam fugiat dolore ex nulla impedit. Vitae pariatur architecto nobis? Repellendus voluptate est doloribus veniam quaerat eaque!",
  },

  {
    productType: "Tablet",
    brand: "Generic",
    model: "Roblox",
    cost: "$" + 75.0,
    quantity: 8,
    img: "assets/tabletRoblox.svg",
    alt: "laptop",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum laboriosam ducimus amet ipsum totam fugiat dolore ex nulla impedit. Vitae pariatur architecto nobis? Repellendus voluptate est doloribus veniam quaerat eaque!",
  },
];

// selectors
const productsContainer = document.querySelector(".products-container");

const buildProducts = () => {
  // clear everything in the element before we rebuild:
  productsContainer.innerHTML = "";
  // loop through productsContainer, rebuild HTML:
  catalog.forEach((item, llama) => {
    // create elements
    const newProduct = document.createElement("div");
    // const selector = document.createElement("div");
    const newImg = document.createElement("img");
    const newDiv = document.createElement("div");
    const productName = document.createElement("p");
    const productCost = document.createElement("p");
    const productDescription = document.createElement("p");

    // modify elements
    // style
    newProduct.classList.add("product");
    newDiv.classList.add("name-price");
    productDescription.classList.add("description");
    newImg.classList.add("product-images");
    // selector.classList.add("product-selector");

    // Attribute
    newImg.setAttribute("src", item.img);
    newImg.setAttribute("alt", item.alt);
    newProduct.setAttribute("data-index", llama);

    // values (text content)
    productName.textContent = item.model;
    productCost.textContent = item.cost;
    productDescription.textContent = item.description;

    // add elements to HTML
    newProduct.append(newImg, newDiv, productDescription);
    // newSpan.append(newImg, newDiv, productDescription);
    newDiv.append(productName, productCost);
    productsContainer.append(newProduct);
  });
};

//call upon page loading initially
buildProducts();

//main page selectors
const eachProduct = document.querySelector(".product");
const allProducts = document.querySelector(".products-container");
const product = document.querySelector(".product-page");

let foundIndex = null;

allProducts.addEventListener("click", (e) => {
  console.dir(e.target);

  console.log(foundIndex);
  if (
    e.target.parentNode.classList.contains("product") ||
    e.target.parentNode.parentNode.classList.contains("product")
  ) {
    product.style.display = "block";
    foundIndex = e.target.getAttribute("data-index");
    console.log(foundIndex);
  }
});

// selectors
const productPage = document.querySelector(".product-page");
const border = document.querySelector(".border");
const productAbout = document.querySelector(".product-about");

const selector = (array, modelImLookingFor) => {
  return array.find((item) => {
    return item.name === modelImLookingFor;
  });
};
console.log(selector(catalog, "Roblox"));
selector(catalog);

const buildProductPage = () => {
  // clear everything in the element before we rebuild:
  productAbout.innerHTML = "";

  // loop through productsContainer, rebuild HTML:
  catalog.forEach((item) => {
    // create elements
    const newImg = document.createElement("img");
    const newH2 = document.createElement("h2");
    const description = document.createElement("p");
    const price = document.createElement("p");

    // Attribute
    newImg.setAttribute("src", item.img);
    newImg.setAttribute("alt", item.alt);

    // modify elements
    // style
    newImg.classList.add("larger-image");
    newH2.classList.add("product-name");
    description.classList.add("product-description");
    price.classList.add("product-price");

    // values (text content)
    newH2.textContent = `${item.brand} ${item.model}`;
    description.textContent = item.description;
    price.textContent = item.cost;

    // add elements to HTML
    border.append(newImg);
    productAbout.append(newH2, description, price);
  });
};
buildProductPage();
