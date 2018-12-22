import {ViewRefresher} from './ViewRefresher.js';

export const CurrentlySelected = (() => {
	let project,
		task;

	const getProject = () => project;
	const getTask = () => task;

	const setProject = (differentProject) => {
		project = differentProject;
		ViewRefresher.updateTasksPane();
	};

	return {getProject, getTask, setProject};
})();