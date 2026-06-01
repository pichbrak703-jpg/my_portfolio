/* MOBILE MENU */
const menuToggle = document.getElementById("menu-toggle");
const navLinks = document.getElementById("nav-links");

menuToggle.addEventListener("click", () => {
    navLinks.classList.toggle("active");
});

/* CLOSE MENU ON CLICK */
document.querySelectorAll(".nav-links a").forEach(link => {
    link.addEventListener("click", () => {
        navLinks.classList.remove("active");
    });
});

/* SCROLL REVEAL ANIMATION */
const cards = document.querySelectorAll(".card");

function showCards() {
    cards.forEach(card => {
        const rect = card.getBoundingClientRect();
        if (rect.top < window.innerHeight - 100) {
            card.classList.add("show");
        }
    });
}

window.addEventListener("scroll", showCards);
showCards();

/* TYPING EFFECT */
const text = "Junior Web Developer | UX/UI Designer";
let i = 0;
const typingElement = document.querySelector(".hero h2");

function typeEffect() {
    if (i < text.length) {
        typingElement.innerHTML += text.charAt(i);
        i++;
        setTimeout(typeEffect, 70);
    }
}

typingElement.innerHTML = "";
typeEffect();