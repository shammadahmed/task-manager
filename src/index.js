import {Task} from './Task.js';
import {Project} from './Project.js';
import {CurrentlySelected} from './CurrentlySelected.js';
import {MainView} from './views/MainView.js';
import {ProjectList} from './ProjectList.js';
import {TaskEvents} from './events/TaskEvents.js';
import {ProjectEvents} from './events/ProjectEvents.js';
import {counter} from './helpers.js';

const initialize = () => {


	const inbox = new Project('Inbox');
	const task1 = new Task(counter(), 'Task 1', 'You can add new tasks like this one', new Date(), 'p1', false);
	const task2 = new Task(counter(), 'Task 2', 'And organize them in projects', new Date(), 'p2', false);

	inbox.addTask(task1);
	inbox.addTask(task2);

	ProjectList.addProject(inbox);

	CurrentlySelected.setProject(inbox);
	
	MainView();

	TaskEvents();

	ProjectEvents();
};

document.addEventListener('DOMContentLoaded', initialize);