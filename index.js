"use strict";

const mobileIcon = document.querySelector("#hamburger"),
  navLinks = document.querySelector("#nav-links");

mobileIcon.addEventListener("click", function () {
  navLinks.classList.toggle("active");

  if (navLinks.classList.contains("active")) {
    mobileIcon.src = "./images/icon-close.svg";
    document.querySelector("main").classList.add("hide-all");
    document.querySelector("footer").classList.add("hide-all");
    document.querySelector("header").classList.add("max-height");
  } else {
    mobileIcon.src = "./images/icon-hamburger.svg";
    document.querySelector("main").classList.remove("hide-all");
    document.querySelector("footer").classList.remove("hide-all");
    document.querySelector("header").classList.remove("max-height");
  }
});
