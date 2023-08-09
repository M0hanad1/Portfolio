"use strict";

const topButton = document.querySelector(".top");

document.body.onscroll = () => {
    if (this.scrollY >= 350) {
        topButton.style.display = "block";
    } else {
        topButton.style.display = "none";
    }
};

document.getElementById("year").textContent = new Date().getFullYear();
