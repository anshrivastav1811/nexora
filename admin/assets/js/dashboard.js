/* ==========================================================
   NEXORA ADMIN
   dashboard.js
========================================================== */

document.addEventListener("DOMContentLoaded", () => {

    // ==========================
    // Logout
    // ==========================

    const logoutBtn = document.getElementById("logoutBtn");

    if (logoutBtn) {

        logoutBtn.addEventListener("click", () => {

            const confirmLogout = confirm("Are you sure you want to logout?");

            if (confirmLogout) {

                localStorage.removeItem("isLoggedIn");

                window.location.href = "login.html";

            }

        });

    }

    // ==========================
    // Sidebar Navigation
    // ==========================

    const pages = {

        portfolioBtn: "pages/portfolio/index.html",

        servicesBtn: "pages/services/index.html",

        messagesBtn: "pages/messages/index.html",

        clientsBtn: "pages/clients/index.html",

        teamBtn: "pages/team/index.html",

        settingsBtn: "pages/settings/index.html"

    };

    Object.keys(pages).forEach(id => {

        const btn = document.getElementById(id);

        if (btn) {

            btn.addEventListener("click", () => {

                window.location.href = pages[id];

            });

        }

    });

    // ==========================
    // Card Counter Animation
    // ==========================

    function animateCounter(id) {

        const element = document.getElementById(id);

        if (!element) return;

        const target = Number(element.innerText);

        let current = 0;

        const speed = Math.max(1, Math.floor(target / 50));

        const interval = setInterval(() => {

            current += speed;

            if (current >= target) {

                current = target;

                clearInterval(interval);

            }

            element.innerText = current;

        }, 20);

    }

    animateCounter("projectCount");
    animateCounter("serviceCount");
    animateCounter("clientCount");
    animateCounter("messageCount");

});