import {TaskView} from './TaskView';

export const TaskListView = tasks => {
	let taskListView = ``;

	tasks.forEach(task => taskListView += TaskView(task));

	return taskListView;
};