/* ==========================================
   NEXORA TEAM
========================================== */

const table = document.getElementById("teamTable");
const modal = document.getElementById("teamModal");
const addBtn = document.getElementById("addMemberBtn");
const closeBtn = document.getElementById("closeModal");
const form = document.getElementById("teamForm");
const search = document.getElementById("searchMember");

let members = JSON.parse(localStorage.getItem("team")) || [];

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

function renderTeam(data = members) {

    table.innerHTML = "";

    if (data.length === 0) {

        table.innerHTML = `
        <tr>
            <td colspan="5" style="text-align:center;padding:30px;">
                No Team Members Found
            </td>
        </tr>
        `;

        return;

    }

    data.forEach((member, index) => {

        table.innerHTML += `
        <tr>

            <td>${member.name}</td>

            <td>${member.role}</td>

            <td>${member.email}</td>

            <td>

                <span class="status ${member.status.toLowerCase()}">

                    ${member.status}

                </span>

            </td>

            <td class="actions">

                <button onclick="editMember(${index})">

                    <i class="ri-edit-line"></i>

                </button>

                <button onclick="deleteMember(${index})">

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

    members.push({

        name: memberName.value,

        role: memberRole.value,

        email: memberEmail.value,

        status: memberStatus.value

    });

    localStorage.setItem(

        "team",

        JSON.stringify(members)

    );

    renderTeam();

    form.reset();

    modal.classList.remove("active");

});

/* ==========================
   Delete
========================== */

function deleteMember(index){

    if(!confirm("Delete this member?")) return;

    members.splice(index,1);

    localStorage.setItem(

        "team",

        JSON.stringify(members)

    );

    renderTeam();

}

/* ==========================
   Edit
========================== */

function editMember(index){

    const member = members[index];

    memberName.value = member.name;

    memberRole.value = member.role;

    memberEmail.value = member.email;

    memberStatus.value = member.status;

    members.splice(index,1);

    localStorage.setItem(

        "team",

        JSON.stringify(members)

    );

    renderTeam();

    modal.classList.add("active");

}

/* ==========================
   Search
========================== */

search.addEventListener("keyup",()=>{

    const value = search.value.toLowerCase();

    const filtered = members.filter(member =>

        member.name.toLowerCase().includes(value) ||

        member.role.toLowerCase().includes(value) ||

        member.email.toLowerCase().includes(value)

    );

    renderTeam(filtered);

});

/* ==========================
   Navigation
========================== */

const routes = {

    dashboardBtn: "../../dashboard.html",

    portfolioBtn: "../portfolio/index.html",

    servicesBtn: "../services/index.html",

    messagesBtn: "../messages/index.html",

    clientsBtn: "../clients/index.html",

    settingsBtn: "../settings/index.html"

};

Object.keys(routes).forEach(id => {

    const btn = document.getElementById(id);

    if(btn){

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

/* ==========================
   Init
========================== */

renderTeam();