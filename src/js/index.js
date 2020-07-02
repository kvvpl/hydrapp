import "../scss/main.scss";

import { registerSW } from "./pwa.js";
registerSW();

console.log("HELLO 🚀");

const addButton = document.querySelector(".main_buttons-add");
const removeButton = document.querySelector(".main_buttons-remove");

function tryLoadFromLocalStorage() {
  const key = new Date().toISOString().slice(0, 10);

  var value = localStorage.getItem(key);

  if (value) {
    var integerValue = parseInt(value, 10);
  } else {
    integerValue = 0;
    localStorage.setItem(key, integerValue);
  }

  const numberOfGlasses = document.querySelector(".main_glass-value");
  numberOfGlasses.innerHTML = integerValue;

  console.log(`tryLoadFromLocalStorage called ${integerValue}`);
}

function myFunction(shouldAdd) {
  const key = new Date().toISOString().slice(0, 10);

  var value = localStorage.getItem(key);

  if (value) {
    var integerValue = parseInt(value, 10);

    if (shouldAdd) {
      integerValue += 1;
    } else {
      if (integerValue > 0) {
        integerValue -= 1;
      }
    }
  } else {
    integerValue = 0;
  }

  const numberOfGlasses = document.querySelector(".main_glass-value");
  numberOfGlasses.innerHTML = integerValue;
  localStorage.setItem(key, integerValue);

  console.log(`${shouldAdd} called ${integerValue}`);
}

addButton.addEventListener("click", () => {
  myFunction(true);
});

removeButton.addEventListener("click", () => {
  myFunction(false);
});

document.onload = tryLoadFromLocalStorage();
