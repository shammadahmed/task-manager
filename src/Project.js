import {projectCounter} from './helpers.js';

function Project (projectName) {
	const id = projectCounter(),
		  name = projectName,
		  tasks = [];

	const addTask = task => {
		tasks.push(task);
	};

	const deleteTask = task => {
		tasks.splice(tasks.indexOf(task), 1);
	};

	return {id, name, tasks, addTask, deleteTask};
}

export {Project};