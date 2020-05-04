var menu = document.querySelector(".page-nav");
var openMenu = document.querySelector(".page-header__toggle");

menu.classList.remove("page-nav--no-js");
openMenu.classList.remove("page-header__toggle--no-js");

openMenu.addEventListener("click", function () {
  menu.classList.toggle("page-nav--closed");
  openMenu.classList.toggle("page-header__toggle--close");
});
