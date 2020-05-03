var menu = document.querySelector(".page-nav");
var openMenu = document.querySelector(".page-header__toggle");

openMenu.addEventListener("click", function () {
  menu.classList.toggle("page-nav--closed");
  openMenu.classList.toggle("page-header__toggle--close");
});
function widthDepended(notOnMobile) {
  if (notOnMobile.matches) {
    menu.classList.add("page-nav--no-js");
    openMenu.classList.add("page-header__toggle--no-js");
  } else {
    menu.classList.remove("page-nav--no-js");
    openMenu.classList.remove("page-header__toggle--no-js");
  }
}
var notOnMobile = window.matchMedia("(min-width: 768px)");
notOnMobile.addListener(widthDepended);
widthDepended(notOnMobile);
