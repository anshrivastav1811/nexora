const projects = [];

function addProject(project){
    projects.push(project);
    renderProjects();
}

function deleteProject(index){
    projects.splice(index,1);
    renderProjects();
}

function renderProjects(){
    // table update
}