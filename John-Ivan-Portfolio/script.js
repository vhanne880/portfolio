
// Mobile navigation menu
const menuToggle = document.querySelector(".menu-toggle");
const navbar = document.querySelector(".navbar");

if (menuToggle && navbar) {
    menuToggle.addEventListener("click", () => {
        navbar.classList.toggle("open");

        const isOpen = navbar.classList.contains("open");
        menuToggle.setAttribute("aria-expanded", String(isOpen));
    });

    // Close the menu after clicking a navigation link
    navbar.querySelectorAll("a").forEach(link => {
        link.addEventListener("click", () => {
            navbar.classList.remove("open");
            menuToggle.setAttribute("aria-expanded", "false");
        });
    });
}