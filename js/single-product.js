import { thumbsActiveFunc } from "./single-product/thumbsActive.js"
import { singleThumbs } from "./glide.js"
import zoomFunc from "./single-product/zoom.js";
import colorsFunc from "./single-product/colors.js";
import valuesFunc from "./single-product/values.js";
import tabsFunc from "./single-product/tabs.js";
import commentsFunc from './single-product/comment.js';



const prodcutId = localStorage.getItem("productId")
    ? JSON.parse(localStorage.getItem("productId"))
    : localStorage.setItem("productId", JSON.stringify(1));

const products = localStorage.getItem("products")
    ? JSON.parse(localStorage.getItem("products"))
    : localStorage.setItem("products", JSON.stringify([]));

const findProduct = products.find((item) => item.id === Number(prodcutId));

// ! Product Title Start
const productTitle = document.querySelector(".product-title");

productTitle.innerHTML = findProduct.name;
// ! Product Title End
// ! Product Price Start
const newPriceDOM = document.querySelector(".new-price");
const oldPriceDOM = document.querySelector(".old-price");

newPriceDOM.innerHTML = `$${(findProduct.price.newPrice).toFixed(2)}`;
oldPriceDOM.innerHTML = `$${(findProduct.price.oldPrice).toFixed(2)}`;

// ! Product Price End
// ! Product Gallery Start
const singleImageDOM = document.querySelector("#single-image");
singleImageDOM.src = findProduct.img.singleImage;

const galleryThumbs = document.querySelector(".gallery-thumbs");
let result = "";
findProduct.img.thumbs.forEach(item => {
    result += `
    <li class="glide__slide">
        <img
            class="img-fluid"
            src="${item}"
            alt=""
        />
    </li>
`;
});
galleryThumbs.innerHTML = result;
singleThumbs();
thumbsActiveFunc();

const productThumbs = document.querySelectorAll(".product-thumb .glide__slide img")
productThumbs[0].classList.add("active");

// ! Product Gallery End
// ! Add To Cart Start

let cart = localStorage.getItem("cart")
    ? JSON.parse(localStorage.getItem("cart"))
    : [];


const findCart = cart.find((item) => item.id === findProduct.id);
const btnAddToCart = document.getElementById("add-to-cart");
const quantityDOM = document.getElementById("quantity");
let cartItems = document.querySelector(".header-cart-count");

if (findCart) {
    btnAddToCart.setAttribute("disabled", "disabled");
}
else {
    btnAddToCart.addEventListener("click", function () {
        cart.push({ ...findProduct, quantity: Number(quantityDOM.value) });
        localStorage.setItem("cart", JSON.stringify(cart));
        cartItems.innerHTML = cart.length;
    });
};
// ! Add To Cart End
