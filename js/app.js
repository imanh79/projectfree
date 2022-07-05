const wraperbtnn = document.querySelector(".insidewraper");
const wrapermobile = document.querySelector(".wraper-mobile");

let navopen = false;
wraperbtnn.addEventListener("click", function () {
  if (navopen) {
    wraperbtnn.classList.remove("wraperbtn--open");
    wrapermobile.classList.remove("wraper__mobile--open");
    navopen = false;
  } else {
    wraperbtnn.classList.add("wraperbtn--open");
    wrapermobile.classList.add("wraper__mobile--open");
    navopen = true;
  }
});
