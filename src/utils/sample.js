import { PROJECT_COLORS, Project } from '../models/Project';
import { PRIORITY, Todo } from '../models/Todo';

function generateProjectOne() {
  const project = new Project('Sample Project One', PROJECT_COLORS.BLUE);
  const todo1 = new Todo(
    'Sample Task 1',
    'This is a sample task.',
    new Date(2025, 25, 10),
    PRIORITY.HIGH
  );
  const todo2 = new Todo('Sample Task 2');
  [todo1, todo2].forEach((todo) => project.addTodo(todo));
  return project;
}

function generateProjectTwo() {
  const project = new Project('Sample Project Two', PROJECT_COLORS.GREEN);
  const todo1 = new Todo(
    'Another Task 1',
    'This is another sample task.',
    new Date(2025, 26, 15),
    PRIORITY.MEDIUM
  );
  const todo2 = new Todo('Another Task 2');
  [todo1, todo2].forEach((todo) => project.addTodo(todo));
  return project;
}

export function projects() {
  const projects = [];
  [generateProjectOne(), generateProjectTwo()].forEach((project) =>
    projects.push(project)
  );
  return projects;
}
