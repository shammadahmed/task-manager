export const ProjectView = project => {
	return `
		<li class="project-bullet" data-project-id="${project.id}">${project.name} (${project.tasks.length})</li>
		<input data-project-id="${project.id}" class="project-edit" value="${project.name}" style="display:none">
	`;
};