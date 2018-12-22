import * as moment from 'moment';

function Task (id, title, description, dueDate, priority, notes, checkList) {
	this.id = id;
	this.title = title;
	this.description = description;
	this.dueDate = moment(dueDate);
	this.priority = priority;
	this.complete = false;
}

Task.prototype.toggleCompletion = function () {
	this.complete = !this.complete
};

Task.prototype.getPriority = function () {
	switch (this.priority) {
		case 'p1': return 'Very Important';
		case 'p2': return 'Important';
		case 'p3': return 'Normal';
		case 'p4': return 'Not Important';
	}
}

Task.prototype.getDueDate = function () {
	if (moment(this.dueDate).isBefore()) {
		return moment(this.dueDate).toNow();
	}

	return moment(this.dueDate).fromNow();
};

export {Task};