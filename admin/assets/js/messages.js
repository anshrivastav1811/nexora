/* ==========================================
   NEXORA MESSAGES
========================================== */

const table = document.getElementById("messageTable");
const modal = document.getElementById("messageModal");
const closeModal = document.getElementById("closeModal");
const details = document.getElementById("messageDetails");
const search = document.getElementById("searchMessage");

/* Demo Data */

let messages = [

    {
        name: "Ansh",
        email: "ansh@gmail.com",
        subject: "Website Development",
        message: "I want a business website.",
        date: "10 Jul 2026",
        status: "New"
    },

    {
        name: "Rahul",
        email: "rahul@gmail.com",
        subject: "Logo Design",
        message: "Need a premium logo.",
        date: "09 Jul 2026",
        status: "Read"
    }

];

/* ==========================
   Render
========================== */

function renderMessages(data = messages) {

    table.innerHTML = "";

    if (data.length === 0) {

        table.innerHTML = `
        <tr>
            <td colspan="6" style="text-align:center;padding:25px;">
                No Messages Found
            </td>
        </tr>
        `;

        return;

    }

    data.forEach((msg, index) => {

        table.innerHTML += `

        <tr>

            <td>${msg.name}</td>

            <td>${msg.email}</td>

            <td>${msg.subject}</td>

            <td>${msg.date}</td>

            <td>

                <span class="status ${msg.status.toLowerCase()}">

                    ${msg.status}

                </span>

            </td>

            <td class="actions">

                <button onclick="viewMessage(${index})">

                    <i class="ri-eye-line"></i>

                </button>

                <button onclick="deleteMessage(${index})">

                    <i class="ri-delete-bin-line"></i>

                </button>

            </td>

        </tr>

        `;

    });

}

/* ==========================
   View Message
========================== */

function viewMessage(index){

    const msg = messages[index];

    details.innerHTML = `

        <p><strong>Name:</strong> ${msg.name}</p>

        <p><strong>Email:</strong> ${msg.email}</p>

        <p><strong>Subject:</strong> ${msg.subject}</p>

        <p><strong>Date:</strong> ${msg.date}</p>

        <hr>

        <p>${msg.message}</p>

    `;

    modal.classList.add("active");

}

/* ==========================
   Close Modal
========================== */

closeModal.onclick = () => {

    modal.classList.remove("active");

};

window.onclick = (e)=>{

    if(e.target===modal){

        modal.classList.remove("active");

    }

}

/* ==========================
   Delete
========================== */

function deleteMessage(index){

    if(confirm("Delete this message?")){

        messages.splice(index,1);

        renderMessages();

    }

}

/* ==========================
   Search
========================== */

search.addEventListener("keyup",()=>{

    const value = search.value.toLowerCase();

    const filtered = messages.filter(msg =>

        msg.name.toLowerCase().includes(value) ||

        msg.email.toLowerCase().includes(value) ||

        msg.subject.toLowerCase().includes(value)

    );

    renderMessages(filtered);

});

/* ==========================
   Sidebar Navigation
========================== */

const routes = {

    dashboardBtn: "../../dashboard.html",

    portfolioBtn: "../portfolio/index.html",

    servicesBtn: "../services/index.html",

    clientsBtn: "../clients/index.html",

    teamBtn: "../team/index.html",

    settingsBtn: "../settings/index.html"

};

Object.keys(routes).forEach(id => {

    const btn = document.getElementById(id);

    if(btn){

        btn.onclick = () => {

            window.location.href = routes[id];

        }

    }

});

/* ==========================
   Logout
========================== */

document.getElementById("logoutBtn").onclick = ()=>{

    localStorage.removeItem("isLoggedIn");

    window.location.href="../../login.html";

}

/* ==========================
   Init
========================== */

renderMessages();