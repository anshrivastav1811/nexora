/* ==========================================
   NEXORA CLIENTS
========================================== */

const table = document.getElementById("clientTable");
const modal = document.getElementById("clientModal");
const addBtn = document.getElementById("addClientBtn");
const closeBtn = document.getElementById("closeModal");
const form = document.getElementById("clientForm");
const search = document.getElementById("searchClient");

let clients = JSON.parse(localStorage.getItem("clients")) || [];

/* ==========================
   Modal
========================== */

addBtn.onclick = () => {

    modal.classList.add("active");

};

closeBtn.onclick = () => {

    modal.classList.remove("active");

};

window.onclick = (e) => {

    if (e.target === modal) {

        modal.classList.remove("active");

    }

};

/* ==========================
   Render
========================== */

function renderClients(data = clients) {

    table.innerHTML = "";

    if (data.length === 0) {

        table.innerHTML = `

        <tr>

            <td colspan="6" style="text-align:center;padding:30px;">

                No Clients Found

            </td>

        </tr>

        `;

        return;

    }

    data.forEach((client, index) => {

        table.innerHTML += `

        <tr>

            <td>${client.name}</td>

            <td>${client.company}</td>

            <td>${client.service}</td>

            <td>

                <span class="status active">

                    ${client.status}

                </span>

            </td>

            <td>${client.date}</td>

            <td class="actions">

                <button onclick="editClient(${index})">

                    <i class="ri-edit-line"></i>

                </button>

                <button onclick="deleteClient(${index})">

                    <i class="ri-delete-bin-line"></i>

                </button>

            </td>

        </tr>

        `;

    });

}

/* ==========================
   Save
========================== */

form.addEventListener("submit", (e) => {

    e.preventDefault();

    clients.push({

        name: clientName.value,

        company: clientCompany.value,

        service: clientService.value,

        status: clientStatus.value,

        date: new Date().toLocaleDateString()

    });

    localStorage.setItem(

        "clients",

        JSON.stringify(clients)

    );

    renderClients();

    form.reset();

    modal.classList.remove("active");

});

/* ==========================
   Delete
========================== */

function deleteClient(index) {

    if (!confirm("Delete Client?")) return;

    clients.splice(index, 1);

    localStorage.setItem(

        "clients",

        JSON.stringify(clients)

    );

    renderClients();

}

/* ==========================
   Edit
========================== */

function editClient(index) {

    const client = clients[index];

    clientName.value = client.name;

    clientCompany.value = client.company;

    clientService.value = client.service;

    clientStatus.value = client.status;

    clients.splice(index, 1);

    localStorage.setItem(

        "clients",

        JSON.stringify(clients)

    );

    renderClients();

    modal.classList.add("active");

}

/* ==========================
   Search
========================== */

search.addEventListener("keyup", () => {

    const value = search.value.toLowerCase();

    const filtered = clients.filter(client =>

        client.name.toLowerCase().includes(value) ||

        client.company.toLowerCase().includes(value) ||

        client.service.toLowerCase().includes(value)

    );

    renderClients(filtered);

});

/* ==========================
   Sidebar Navigation
========================== */

const routes = {

    dashboardBtn: "../../dashboard.html",

    portfolioBtn: "../portfolio/index.html",

    servicesBtn: "../services/index.html",

    messagesBtn: "../messages/index.html",

    teamBtn: "../team/index.html",

    settingsBtn: "../settings/index.html"

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

logoutBtn.onclick = () => {

    localStorage.removeItem("isLoggedIn");

    window.location.href = "../../login.html";

};

/* ==========================
   Init
========================== */

renderClients();