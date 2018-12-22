export const ProjectList = (() => {
	const projects =  [];

	function getAllProjects () {
		return projects;
	}

	function addProject (project) {
		projects.push(project);
	}

	function getProject (projectId) {
		return projects[projectId];
	}

	function deleteProject (project) {
		projects.splice(projects.indexOf(project), 1);
	}

	return {getAllProjects, addProject, getProject, deleteProject};
})();