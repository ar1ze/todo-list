import * as icon from '../../utils/icon';
import * as dom from '../../utils/dom';

const BEM_BLOCK = 'project-view';

const CLASS_NAMES = {
  BLOCK: BEM_BLOCK,

  TITLE: `${BEM_BLOCK}__title`,
  SECTION: `${BEM_BLOCK}__section`,

  ADD_TASK_BUTTON: {
    CONTAINER: `${BEM_BLOCK}__add-task-button`,
    ICON: `${BEM_BLOCK}__add-task-icon`,
    TEXT: `${BEM_BLOCK}__add-task-text`,
  },
};

function createProjectTitle(projectName) {
  const title = dom.createElement('h3', CLASS_NAMES.TITLE, projectName);
  return title;
}

function createSection(project) {
  const section = dom.createElement('section', CLASS_NAMES.SECTION);
  const addTaskButton = createAddTaskButton();

  section.append(addTaskButton);
  return section;
}

function createAddTaskButton() {
  const button = dom.createElement(
    'button',
    CLASS_NAMES.ADD_TASK_BUTTON.CONTAINER
  );
const iconClasses = [CLASS_NAMES.ADD_TASK_BUTTON.ICON, icon.LARGE];
  const iconElement = icon.create(icon.plus, iconClasses);
  const text = dom.createElement(
    'span',
    CLASS_NAMES.ADD_TASK_BUTTON.TEXT,
    'Add Task'
  );

  button.append(iconElement, text);
  return button;
}

export function populate(main, project) {
  if (!project) return;

  const body = dom.createElement('div', CLASS_NAMES.BLOCK);
  const title = createProjectTitle(project.name);
  const section = createSection(project);

  body.append(title, section);
  main.append(body);
}
