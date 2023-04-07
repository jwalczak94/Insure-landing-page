"use strict";

const mobileIcon = document.querySelector("#hamburger"),
  navLinks = document.querySelector("#nav-links");

mobileIcon.addEventListener("click", function () {
  navLinks.classList.toggle("active");

  if (navLinks.classList.contains("active")) {
    mobileIcon.src = "./images/icon-close.svg";
    document.querySelector("body").classList.add("overflow");
  } else {
    mobileIcon.src = "./images/icon-hamburger.svg";
    document.querySelector("body").classList.remove("overflow");
  }
});
