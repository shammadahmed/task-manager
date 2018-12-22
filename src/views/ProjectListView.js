import {ProjectView} from './ProjectView.js';

export const ProjectListView = projects => {
	let projectListView = `<ul>`;

	projects.forEach(project => projectListView += ProjectView(project));

	projectListView += `</ul>`;

	return projectListView;
};