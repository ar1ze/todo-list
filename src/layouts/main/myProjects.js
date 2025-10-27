import * as icon from '../../utils/icon';
import * as dom from '../../utils/dom';

function createProjectTitle() {
  const title = dom.createElement('h3', 'my-projects__title', 'My Projects');
  return title;
}

function createProjectHeader(projects) {
  const projectLength = projects.length;

  if (projectLength === 0) {
    header.innerText = 'No projects';
    return header;
  }

  const header = dom.createElement('h5', 'my-projects__header');
  const projectsText = projectLength === 1 ? 'project' : 'projects';
  header.innerText = `${projectLength} ${projectsText}`;

  return header;
}

function createProjectContent(projects) {
  const section = dom.createElement('section', 'my-projects__section');
  const header = createProjectHeader(projects);

  const hashtagIconClasses = [
    'my-projects__button-icon',
    'my-projects__button-hashtag-icon',
    'icon--large',
    'icon--thin',
  ];
  const optionsIconClasses = [
    'my-projects__button-icon',
    'my-projects__button-options-icon',
    'icon--large',
    'icon--thin',
  ];

  const list = dom.createElement('ul', 'my-projects__list');

  projects.forEach((project) => {
    const item = dom.createElement('li', 'my-projects__item');
    const button = dom.createElement('button', 'my-projects__button');

    const content = dom.createElement('span', 'my-projects__button-content');
    const hashtag = icon.create(icon.hashtag, hashtagIconClasses);
    const label = dom.createElement(
      'span',
      'my-projects__button-label',
      project.name
    );
    content.append(hashtag, label);

    const option = icon.create(icon.moreHollow, optionsIconClasses);
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
