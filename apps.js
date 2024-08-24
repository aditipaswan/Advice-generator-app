"use strict";

const adviceId = document.querySelector(".adviceId");
const advice = document.querySelector(".advice");
const btn = document.querySelector(".btn");

btn.addEventListener("click", generateAdvice);

function generateAdvice() {
  fetch("https://api.adviceslip.com/advice")
    .then((res) => {
      if (!res.ok) {
        throw new Error(`HTTP error! Status: ${res.status}`);
      }
      return res.json();
    })
    .then((data) => {
      adviceId.innerHTML = `${data.slip.id}`;
      advice.innerHTML = `”${data.slip.advice}”`;
    })
    .catch((err) => {
      advice.innerHTML = `Something went wrong: ${err.message}`;
    });
}

generateAdvice();
