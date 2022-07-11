const openmenu = document.querySelector(".menuleft__icon-img");
const closemenu = document.querySelector(".mobile-menu__esc");
const mobilemanage = document.querySelector(".mobile-new");
const currect = true;
console.log(mobilemanage);
openmenu.addEventListener("click", function (event) {
  if (currect) {
    event.preventDefault();
    mobilemanage.classList.remove("mobile__off");
    mobilemanage.classList.add("mobile__on");
  } else {
    event.preventDefault();
    mobilemanage.classList.add("mobile__on");
    mobilemanage.classList.remove("mobile__off");
  }
});
closemenu.addEventListener("click", function () {
  mobilemanage.classList.remove("mobile__on");
});
