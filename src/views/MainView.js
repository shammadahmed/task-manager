import {ProjectListView} from './ProjectListView.js';
import {TaskListView} from './TaskListView.js';
import {ProjectList} from './../ProjectList.js';
import {CurrentlySelected} from './../CurrentlySelected.js';

export const MainView = () => {
	const projectsPane = document.getElementById('projects');
	const tasksPane = document.getElementById('tasks');
	
	projectsPane.innerHTML = ProjectListView(ProjectList.getAllProjects());
	tasksPane.innerHTML = TaskListView(CurrentlySelected.getProject().tasks);
};