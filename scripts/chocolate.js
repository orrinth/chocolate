const burger = document.querySelector(".burger");
const burgerLine1 = document.querySelector("#line1");
const burgerLine2 = document.querySelector("#line2");
const burgerLine3 = document.querySelector("#line3");
const navLinks = document.querySelector("nav ul");
let show = false;

function showMenu() {
    if (show == false) {
        show = true;

        burgerLine1.style.transform = "rotateZ(45deg) translate(0.5rem, 0.65rem)";
        burgerLine1.style.transition = "transform 0.3s ease-out";

        burgerLine2.style.opacity = "0";
        burgerLine2.style.transition = "opacity 0.3s ease-out";

        burgerLine3.style.transform = "rotateZ(-45deg) translate(0.5rem, -0.65rem)";
        burgerLine3.style.transition = "transform 0.3s ease-out";

        
        navLinks.style.display = "block";
        navLinks.style.transition = "display 0.2s ease-out";
    } else {
        show = false;

        burgerLine1.style.transform = "rotateZ(0deg) translateY(0)";
        burgerLine1.style.transition = "transform 0.3s ease-out";

        burgerLine2.style.opacity = "1";
        burgerLine2.style.transition = "opacity 0.3s ease-out";

        burgerLine3.style.transform = "rotateZ(0deg) translateY(0)";
        burgerLine3.style.transition = "transform 0.3s ease-out";

        navLinks.style.display = "";
        navLinks.style.transition = "display 0.2s ease-out";
    }

}

burger.addEventListener("click", showMenu);
