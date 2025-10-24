export const PRIORITY = {
  HIGH: 'high',
  MEDIUM: 'medium',
  LOW: 'low',
};

export class Todo {
  constructor(
    title,
    description = '',
    dueDate = null,
    priority = PRIORITY.HIGH
  ) {
    this.title = title;
    this.description = description;
    this.dueDate = dueDate;
    this.priority = priority;
    this.isComplete = false;
    this.id = crypto.randomUUID();
  }

  toggleComplete() {
    this.isComplete = !this.isComplete;
  }
}
