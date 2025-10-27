import * as icon from '../../utils/icon';
import * as dom from '../../utils/dom';

function createProjectTitle() {
  const title = dom.createElement('h3', 'my-projects__title', 'My Projects');
  return title;
}

function createAddProjectButton() {
  const button = dom.createElement('button', 'my-projects__add-project-button');
  const iconClasses = [
    'my-projects__add-project-button-icon',
    'icon--large',
    'icon--thin',
  ];
  const plusIcon = icon.create(icon.plus, iconClasses);
  const label = dom.createElement(
    'span',
    'my-projects__add-project-button-label',
    'Add Project'
  );

  button.append(plusIcon, label);
  return button;
}

function createProjectHeader(projects) {
  const header = dom.createElement('header', 'my-projects__header');
  const addProject = createAddProjectButton();
  header.append(addProject);

  const title = dom.createElement('h6', 'my-projects__header-label');
  const projectLength = projects.length;

  if (projectLength === 0) {
    title.innerText = 'No projects';
    header.append(title, addProject);
    return header;
  }

  const projectsText = projectLength === 1 ? 'project' : 'projects';
  title.innerText = `${projectLength} ${projectsText}`;

  header.append(title, addProject);
  return header;
}

function createProjectContent(projects) {
  const section = dom.createElement('section', 'my-projects__section');
  const header = createProjectHeader(projects);

  const iconClasses = ['my-projects__button-icon', 'icon--large', 'icon--thin'];
  const list = dom.createElement('ul', 'my-projects__project-list');

  projects.forEach((project) => {
    const item = dom.createElement('li', 'my-projects__project-item');
    const button = dom.createElement('button', 'my-projects__project-link');

    const content = dom.createElement(
      'span',
      'my-projects__project-link-content'
    );
    const hashtag = icon.create(icon.hashtag, iconClasses);
    hashtag.classList.add('my-projects__project-link-hashtag');

    const label = dom.createElement(
      'span',
      'my-projects__project-link-label',
      project.name
    );
    content.append(hashtag, label);

    const option = icon.create(icon.moreHollow, iconClasses);
    option.classList.add('my-projects__project-link-options');

    button.append(content, option);

    item.append(button);
    list.append(item);
  });

  section.append(header, list);
  return section;
}

export function populateMyProjects(main, projects) {
  const body = dom.createElement('div', 'my-projects');

  const title = createProjectTitle();
  const content = createProjectContent(projects);

  body.append(title, content);
  main.append(body);
}
