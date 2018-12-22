import {CurrentlySelected} from './CurrentlySelected.js';
import {TaskListView} from './views/TaskListView.js';
import {ProjectListView} from './views/ProjectListView.js';
import {ProjectList} from './ProjectList.js';

export const ViewRefresher = (() => {
	const updateProjectsPane = () => {
		document.getElementById('projects').innerHTML = ProjectListView(ProjectList.getAllProjects());
	};

	const updateTasksPane = () => {
		document.getElementById('tasks').innerHTML = TaskListView(CurrentlySelected.getProject().tasks);
	};

	return {updateProjectsPane, updateTasksPane};
})();