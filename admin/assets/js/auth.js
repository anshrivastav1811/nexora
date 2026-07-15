document.addEventListener("DOMContentLoaded", () => {

    const form = document.getElementById("loginForm");

    if (!form) return;

    form.addEventListener("submit", (e) => {

        e.preventDefault();

        const email = document.getElementById("email").value.trim();
        const password = document.getElementById("password").value.trim();

        // Temporary Login
        if (
            email === "admin@nexora.com" &&
            password === "admin123"
        ) {

            localStorage.setItem("isLoggedIn", "true");

            window.location.href = "dashboard.html";

        } else {

            alert("Invalid Email or Password");

        }

    });

});