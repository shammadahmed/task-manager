import {ProjectList} from './../ProjectList.js';
import {Project} from './../Project.js';
import {CurrentlySelected} from './../CurrentlySelected.js';
import {ViewRefresher} from './../ViewRefresher.js';

export const ProjectEvents = () => {
	document.getElementById('project-new-button').addEventListener('click', e => {
		e.target.style.display = 'none';
		e.target.nextElementSibling.style.display = 'block';
		e.target.nextElementSibling.focus();

	});

	document.getElementById('project-add-input').addEventListener('keydown', e => {
		if (e.key === 'Enter') {
			e.target.style.display = 'none';
			e.target.previousElementSibling.style.display = 'block';
			let newProject = Project(e.target.value);
			ProjectList.addProject(newProject);
			ViewRefresher.updateProjectsPane();
			CurrentlySelected.setProject(newProject);
			e.target.value = '';
		}
	});

	document.addEventListener('click', e => {
		if (e.target.hasAttribute('data-project-id')) {
			CurrentlySelected.setProject(ProjectList.getProject(e.target.dataset.projectId));
		}
	});

	document.addEventListener('dblclick', e => {
		if (e.target.hasAttribute('data-project-id')) {
			e.target.style.display = 'none';
			e.target.nextElementSibling.style.display = 'block';
			e.target.nextElementSibling.select();
		}
	});

	document.addEventListener('keydown', e => {
		if (e.key === 'Enter' && e.target.classList.contains('project-edit')) {			
			e.target.style.display = 'none';
			e.target.previousElementSibling.style.display = 'block';
			ProjectList.getProject(e.target.dataset.projectId).name = e.target.value;
			ViewRefresher.updateProjectsPane();
		}
	});
};