// Script for Butchery Shop Website

document.addEventListener("DOMContentLoaded", () => {
    // Smooth scroll for navigation links
    const navLinks = document.querySelectorAll("nav ul li a");

    navLinks.forEach(link => {
        link.addEventListener("click", event => {
            event.preventDefault();
            const targetId = link.getAttribute("href").slice(1);
            const targetElement = document.getElementById(targetId);
            
            window.scrollTo({
                top: targetElement.offsetTop - document.querySelector("header").offsetHeight,
                behavior: "smooth",
            });
        });
    });

    // Interactive buttons on product cards
    const productButtons = document.querySelectorAll(".products .product button");

    productButtons.forEach(button => {
        button.addEventListener("click", () => {
            alert("Thank you for your interest! Please contact us to place your order.");
        });
    });

    // Form submission handling
    const contactForm = document.querySelector(".contact form");

    contactForm.addEventListener("submit", event => {
        event.preventDefault();

        const name = document.getElementById("name").value;
        const email = document.getElementById("email").value;
        const message = document.getElementById("message").value;

        if (name && email && message) {
            alert(`Thank you, ${name}! Your message has been sent.`);
            contactForm.reset();
        } else {
            alert("Please fill out all fields before submitting.");
        }
    });
});





















































