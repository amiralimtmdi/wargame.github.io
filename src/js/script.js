"use strict";

// selectors
const nav = document.querySelector("nav");
const header = document.querySelector("header");
const headerContant = document.querySelector(".header__contant");
const sections = document.querySelectorAll("section");
const footer = document.querySelector("footer");
const menuItem = document.querySelectorAll(".menu-item--link");
const menuOpenBtn = document.querySelector(".hamberger-icon");
const menuCloseBtn = document.querySelector(".close-icon");

// Open/Close Menu on Mobile Device
let menuBehave = false;
menuOpenBtn.addEventListener("click", function () {
  if (!menuBehave) {
    nav.style.height = "100%";
    nav.style.position = "fixed";
    menuBehave = true;
  }
});
menuCloseBtn.addEventListener("click", function () {
  if (menuBehave) {
    nav.style.height = "5%";
    menuBehave = false;
  }
});

// Close menu when click on li
menuItem.forEach((item) => {
  item.addEventListener("click", function () {
    nav.style.height = "5%";
    menuBehave = false;

    document
      .getElementById(`${item.dataset.link}`)
      .scrollIntoView({ behavior: "smooth" });
  });
});

// set header to size of window
headerContant.style.height = `${(window.screen.height * 85) / 100}px`;

// move to top after per reload
window.addEventListener("load", function () {
  nav.scrollIntoView({ behavior: "smooth" });
});

// Observer
const option = {
  root: null,
  threshold: 0.06,
};

const observer = new IntersectionObserver(function (entries, observer) {
  const [ent] = entries;
  const target = ent.target;
  if (ent.isIntersecting) {
    target.classList.remove("hide-section");
    target.classList.contains("how-it-work");
  }
  observer.unobserve(target);
  if (target.classList.contains("fast-start") && window.screen.width > 789) {
    nav.style.position = "fixed";
  }
}, option);

const allSection = [nav, , ...sections];
allSection.forEach((section) => observer.observe(section));
