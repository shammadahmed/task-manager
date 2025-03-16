import {CurrentlySelected} from './../CurrentlySelected.js';
import {Task} from './../Task.js';
import {counter} from './../helpers.js';
import {ViewRefresher} from './../ViewRefresher.js';

export const TaskEvents = () => {
	document.getElementById('task-new-button').addEventListener('click', e => {
		e.target.style.display = 'none';
		e.target.nextElementSibling.style.display = 'block';
		document.getElementById('task-title').focus();
	});

	document.getElementById('task-add-button').addEventListener('click', e => {
		e.preventDefault();
		document.getElementById('task-new-button').style.display = 'block'
		document.getElementById('task-add-form').style.display = 'none';

		CurrentlySelected.getProject().addTask(new Task(
			counter(),
			document.getElementById('task-title').value,
			document.getElementById('task-description').value,
			document.getElementById('task-due-date').value,
			document.getElementById('task-priority').value
		));

		ViewRefresher.updateTasksPane();
		ViewRefresher.updateProjectsPane();
	});

	document.addEventListener('click', e => {
		if (e.target.classList.contains('task-complete')) {
			e.target.parentElement.parentElement.classList.toggle('task-checked');
			CurrentlySelected.getProject().tasks[e.target.parentElement.parentElement.dataset.taskId].toggleCompletion();
		}
	});

	document.addEventListener('dblclick', e => {
		if (e.target.parentElement && e.target.parentElement.hasAttribute('data-task-id')) {
			e.target.parentElement.style.display = 'none';
			e.target.parentElement.nextElementSibling.style.display = 'block';
			e.target.parentElement.nextElementSibling.firstElementChild.children[1].select();
		}
	});

	document.addEventListener('click', e => {
		if (e.target.classList.contains('task-edit-button')) {
			e.preventDefault();
			let formData = document.querySelector(`form[data-task-id="${e.target.parentElement.dataset.taskId}"`);
			let task = CurrentlySelected.getProject().tasks[formData.dataset.taskId];
			task.title = formData[0].value;
			task.description = formData[1].value;
			task.priority = formData[2].value;
			task.dueDate = formData[3].value;
			console.log(task);
			ViewRefresher.updateProjectsPane();
			ViewRefresher.updateTasksPane();
		}
	});
};