let navbar = document.querySelector(".navbar");
let searchForm = document.querySelector(".search-form");
let cartItem = document.querySelector(".cart-container");

// @ts-ignore
document.querySelector(".menu-btn").onclick = () => {
  // @ts-ignore
  navbar.classList.toggle("active");
  // @ts-ignore
  searchForm.classList.remove("active");
  // @ts-ignore
  cartItem.classList.remove("active");
};

// @ts-ignore
document.querySelector(".icons__search").onclick = () => {
  // @ts-ignore
  searchForm.classList.toggle("active");
  // @ts-ignore
  navbar.classList.remove("active");
  // @ts-ignore
  cartItem.classList.remove("active");
};

// @ts-ignore
document.querySelector(".icons__card").onclick = () => {
  // @ts-ignore
  cartItem.classList.toggle("active");
  // @ts-ignore
  navbar.classList.remove("active");
  // @ts-ignore
  searchForm.classList.remove("active");
};

window.onscroll = () => {
  // @ts-ignore
  navbar.classList.remove("active");
  // @ts-ignore
  searchForm.classList.remove("active");
  // @ts-ignore
  cartItem.classList.remove("active");
};
