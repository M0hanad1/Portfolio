"use strict";

const topButton = document.querySelector(".top");

document.body.onscroll = () => {
    if (this.scrollY >= 350) {
        if (topButton.style.opacity == 0) {
            topButton.style.visibility = "visible";
            topButton.style.opacity = 1;
        }
    } else {
        if (topButton.style.opacity == 1) {
            topButton.style.opacity = 0;
            setTimeout(() => (topButton.style.visibility = "hidden"), 200);
        }
    }
};

document.getElementById("year").textContent = new Date().getFullYear();
