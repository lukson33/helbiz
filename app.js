//constants init
const hamburger = document.querySelector(".hamburger");
const mobileNavigation = document.querySelector(".mobile-navigation");
const company = document.querySelector(".nav-company");
const product = document.querySelector(".nav-product");
const about = document.querySelector(".nav-about");
const aboutBtn = document.querySelector(".about-btn");
const tabBtns = [...document.querySelectorAll(".tab-btn")];

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

//tab buttons in nav functionality
tabBtns.map((btn) => {
  btn.addEventListener("click", () => {
    //get tab buttons
    const buttonArr = [...document.querySelector(".nav-btns").children];
    //find the index of clicked tab button in the array
    const btnIndex = buttonArr.findIndex(
      (item) => item.classList === btn.classList
    );
    //find the tab according to index of clicked button
    const choosenTab = document.querySelector(".nav-tabs").children[btnIndex];
    //go through all of the tabs
    [...document.querySelector(".nav-tabs").children].map((tab) => {
      //check if tab is the one that is not chosen
      if (tab !== choosenTab) {
        //fade out the tab that wasn't chosen
        tab.classList.add("fade-out");
        tab.classList.remove("fade-in");
      }
    });
    //fade in the tab that was choosen
    setTimeout(() => {
      choosenTab.classList.remove("fade-out");
      choosenTab.classList.add("fade-in");
    }, 300);

    //blue border animation
    //calculate how much and where border should move - 105px * the index of the button that was clicked
    const borderPos = 105 * btnIndex;
    //move border to calculated position
    document.querySelector(
      ".blue-border"
    ).style.transform = `translate(${borderPos}px)`;
  });
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
