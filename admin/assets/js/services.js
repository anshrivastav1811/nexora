/* ==========================================
   NEXORA SERVICES
========================================== */

const addBtn = document.getElementById("addServiceBtn");
const modal = document.getElementById("serviceModal");
const closeModal = document.getElementById("closeModal");
const form = document.getElementById("serviceForm");
const table = document.getElementById("serviceTable");

let services = JSON.parse(localStorage.getItem("services")) || [];

/* ==========================
   Open / Close Modal
========================== */

addBtn.onclick = () => {
    modal.classList.add("active");
};

closeModal.onclick = () => {
    modal.classList.remove("active");
};

window.onclick = (e) => {
    if (e.target === modal) {
        modal.classList.remove("active");
    }
};

/* ==========================
   Render Table
========================== */

function renderServices() {

    table.innerHTML = "";

    if (services.length === 0) {

        table.innerHTML = `
            <tr>
                <td colspan="6" style="text-align:center;padding:30px;">
                    No Services Found
                </td>
            </tr>
        `;

        return;
    }

    services.forEach((service, index) => {

        table.innerHTML += `

        <tr>

            <td>
                <i class="${service.icon}" style="font-size:22px;"></i>
            </td>

            <td>${service.name}</td>

            <td>${service.category}</td>

            <td>${service.price}</td>

            <td>
                <span class="status active">
                    Active
                </span>
            </td>

            <td class="actions">

                <button onclick="editService(${index})">
                    <i class="ri-edit-line"></i>
                </button>

                <button onclick="deleteService(${index})">
                    <i class="ri-delete-bin-line"></i>
                </button>

            </td>

        </tr>

        `;

    });

}

/* ==========================
   Save Service
========================== */

form.addEventListener("submit", function (e) {

    e.preventDefault();

    services.push({

        name: document.getElementById("serviceName").value,

        category: document.getElementById("serviceCategory").value,

        price: document.getElementById("servicePrice").value,

        icon: document.getElementById("serviceIcon").value ||

            "ri-service-line"

    });

    localStorage.setItem(

        "services",

        JSON.stringify(services)

    );

    renderServices();

    form.reset();

    modal.classList.remove("active");

});

/* ==========================
   Delete
========================== */

function deleteService(index) {

    if (!confirm("Delete this service?")) return;

    services.splice(index, 1);

    localStorage.setItem(

        "services",

        JSON.stringify(services)

    );

    renderServices();

}

/* ==========================
   Edit
========================== */

function editService(index) {

    const service = services[index];

    document.getElementById("serviceName").value = service.name;

    document.getElementById("serviceCategory").value = service.category;

    document.getElementById("servicePrice").value = service.price;

    document.getElementById("serviceIcon").value = service.icon;

    services.splice(index, 1);

    localStorage.setItem(

        "services",

        JSON.stringify(services)

    );

    renderServices();

    modal.classList.add("active");

}

/* ==========================
   Sidebar Navigation
========================== */

const dashboardBtn = document.getElementById("dashboardBtn");
const portfolioBtn = document.getElementById("portfolioBtn");

if (dashboardBtn) {
    dashboardBtn.onclick = () => {
        window.location.href = "dashboard.html";
    };
}

if (portfolioBtn) {
    portfolioBtn.onclick = () => {
        window.location.href = "portfolio.html";
    };
}

/* ==========================
   Logout
========================== */

const logoutBtn = document.getElementById("logoutBtn");

if (logoutBtn) {

    logoutBtn.onclick = () => {

        localStorage.removeItem("isLoggedIn");

        window.location.href = "login.html";

    };

}

/* ==========================
   Init
========================== */

renderServices();