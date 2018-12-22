import * as moment from 'moment';


export const TaskView = task => {
	return `
		<section data-task-id=${task.id} class="task ${task.complete ? 'task-checked' : ''}">
			<h3 class="task-title"><input class="task-complete" type="checkbox" ${task.complete ? 'checked' : ''}>${task.title}</h3>
			<p class="task-description">${task.description}</p>
			<time class="task-due-date">Due: ${task.getDueDate()}</time>
			<span class="task-priority">Priority: ${task.getPriority()}</span>
		</section>
		<form data-task-id=${task.id} class="task-edit" style="display:none" name="task-edit">
			<div class="input-group">
				<label for="task-title">Title:</label>
				<input type="text" id="task-title" value="${task.title}">
			</div>
			<div class="input-group">
				<label for="task-description">Description:</label>
				<textarea id="task-description">${task.description}</textarea>
			</div>
			<div class="input-group">
				<label for="task-priority">Priority:</label>
				<select id="task-priority">
					<option value="p1" ${task.priority === 'p1' ? 'selected' : ''}>Very Imortant</option>
					<option value="p2" ${task.priority === 'p2' ? 'selected' : ''}>Important</option>
					<option value="p3" ${task.priority === 'p3' ? 'selected' : ''}>Normal</option>
					<option value="p4" ${task.priority === 'p4' ? 'selected' : ''}>Not Important</option>
				</select>
			</div>
			<div class="input-group">
				<label for="task-due-date">Due:</label>
				<input type="datetime-local" id="task-due-date" value="${moment(task.dueDate).format('YYYY-MM-DDThh:mm')}">
			</div>
			<button class="task-edit-button">Update task</button>
		</form>
	`;
};