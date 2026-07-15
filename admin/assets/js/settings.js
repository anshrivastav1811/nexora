/* ==========================================
   NEXORA SETTINGS
========================================== */

const form = document.getElementById("settingsForm");

/* ==========================
   Load Settings
========================== */

const settings = JSON.parse(localStorage.getItem("settings")) || {

    siteName: "NEXORA",
    adminEmail: "",
    contactNumber: "",
    siteDescription: ""

};

siteName.value = settings.siteName;
adminEmail.value = settings.adminEmail;
contactNumber.value = settings.contactNumber;
siteDescription.value = settings.siteDescription;

/* ==========================
   Save Settings
========================== */

form.addEventListener("submit", (e) => {

    e.preventDefault();

    const data = {

        siteName: siteName.value.trim(),

        adminEmail: adminEmail.value.trim(),

        contactNumber: contactNumber.value.trim(),

        siteDescription: siteDescription.value.trim()

    };

    localStorage.setItem(

        "settings",

        JSON.stringify(data)

    );

    alert("Settings Saved Successfully ✅");

});

/* ==========================
   Sidebar Navigation
========================== */

const routes = {

    dashboardBtn: "../../dashboard.html",

    portfolioBtn: "../portfolio/index.html",

    servicesBtn: "../services/index.html",

    messagesBtn: "../messages/index.html",

    clientsBtn: "../clients/index.html",

    teamBtn: "../team/index.html"

};

Object.keys(routes).forEach(id => {

    const btn = document.getElementById(id);

    if (btn) {

        btn.onclick = () => {

            window.location.href = routes[id];

        };

    }

});

/* ==========================
   Logout
========================== */

document.getElementById("logoutBtn").onclick = () => {

    localStorage.removeItem("isLoggedIn");

    window.location.href = "../../login.html";

};