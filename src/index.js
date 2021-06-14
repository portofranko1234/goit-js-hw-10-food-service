import menuItems from "./menu.json";
import menuTemplate from "./templates/menu.hbs";
import styles from "./styles.css";

const menuGallery = document.querySelector(".menu");
const markup = menuTemplate(menuItems);
menuGallery.insertAdjacentHTML("afterbegin", markup);
const Theme = {
  LIGHT: "light-theme",
  DARK: "dark-theme",
};
const body = document.querySelector("body");
const defaultTheme = body.classList.add("light-theme");

const button = document.querySelector("#theme-switch-toggle");
button.onchange = function () {
  if (button.checked === true) {
    body.classList.add("dark-theme");
    body.classList.remove("light-theme");
    localStorage.setItem("theme-color", Theme.DARK);
  } else {
    body.classList.remove("dark-theme");
    body.classList.add("light-theme");
    localStorage.setItem("theme-color", Theme.LIGHT);
  }
};
const savedTheme = localStorage.getItem("theme-color");
if (savedTheme === Theme.DARK) {
  button.checked = true;
  body.classList.add("dark-theme");
}
if (savedTheme === Theme.LIGHT) {
  button.checked = false;
  body.classList.add("light-theme");
}
