// ==============================
// Footer Animation
// ==============================

document.addEventListener("DOMContentLoaded", () => {

    const footer = document.querySelector(".footer");

    if (!footer) return;

    // Reveal Animation
    const observer = new IntersectionObserver((entries) => {

        entries.forEach(entry => {

            if (entry.isIntersecting) {

                footer.classList.add("show-footer");

            }

        });

    }, {
        threshold: 0.2
    });

    observer.observe(footer);

    // Social Hover Effect
    document.querySelectorAll(".footer-social a").forEach(icon => {

        icon.addEventListener("mouseenter", () => {

            icon.style.transform = "translateY(-6px) scale(1.08)";

        });

        icon.addEventListener("mouseleave", () => {

            icon.style.transform = "translateY(0) scale(1)";

        });

    });

});