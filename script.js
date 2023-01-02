const burger = document.querySelector("#burger-menu");
const menu = document.querySelector("#menu");
const burgerIcon = document.querySelector("#burger-icon");
let closeImg = false;
burger.addEventListener("click", () => {
  closeImg = !closeImg;
  if (closeImg) {
    menu.classList.toggle("grid");
    menu.classList.toggle("hidden");
    burgerIcon.src = "./assets/images/icon-menu-close.svg";
  } else {
    menu.classList.toggle("grid");
    menu.classList.toggle("hidden");
    burgerIcon.src = "./assets/images/icon-menu.svg";
  }
});
