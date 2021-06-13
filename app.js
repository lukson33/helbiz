//constants init
const hamburger = document.querySelector(".hamburger");
const mobileNavigation = document.querySelector(".mobile-navigation");
const company = document.querySelector(".nav-company");
const product = document.querySelector(".nav-product");
const about = document.querySelector(".nav-about");
const aboutBtn = document.querySelector(".about-btn");

//navigation
hamburger.addEventListener("click", () => {
  //toggle hamburger animation
  hamburger.classList.toggle("is-active");
  if (mobileNavigation.classList.contains("mobile-hidden")) {
    mobileNavigation.classList.remove("mobile-hidden");
  } else {
    mobileNavigation.classList.add("mobile-hidden");
  }
});

//product tab in nav functionality
product.addEventListener("click", () => {
  //add and remove classes from active tabs
  company.classList.remove("nav-active");
  product.classList.add("nav-active");

  document.querySelector(".nav-list-5").classList.remove("hidden");
  document.querySelector(".nav-list-5").classList.add("block");

  document.querySelector(".nav-list-9").classList.add("hidden");
  document.querySelector(".nav-list-9").classList.remove("block");
});

//company tab in nav functionality
company.addEventListener("click", () => {
  //add and remove classes from active tabs
  product.classList.remove("nav-active");
  company.classList.add("nav-active");

  document.querySelector(".nav-list-9").classList.remove("hidden");
  document.querySelector(".nav-list-9").classList.add("block");

  document.querySelector(".nav-list-5").classList.add("hidden");
  document.querySelector(".nav-list-5").classList.remove("block");
});

//about button functionality
aboutBtn.addEventListener("click", () => {
  //remove hidden class (put transform back to 0)
  about.classList.remove("about-hidden");
  //block scroll
  document.body.style.overflow = "hidden";
});

//about icon functionality
document.querySelector(".hamburger-about").addEventListener("click", () => {
  //add hidden class (put transform to -100%)
  about.classList.add("about-hidden");
  //allow scroll
  document.body.style.overflow = "auto";
});
