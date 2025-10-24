import { ICONS, createIcon } from '../../utils/icons';
import * as dom from '../../utils/dom';

function createHeader() {
  const header = dom.createElement('div', 'sidebar-projects__header');
  const title = dom.createElement(
    'h3',
    'sidebar-projects__title',
    'My Projects'
  );

  const toggleClasses = [
    'sidebar-projects__header-icon',
    'icon--large',
    'icon--hover',
  ];
  const toggleBtn = createIcon(ICONS.chevronDown, toggleClasses, 'button');

  header.append(title, toggleBtn);

  return { header, toggleBtn };
}

function createProjectList(projects) {
  const list = dom.createElement('ul', 'nav-list');
  const iconClasses = ['sidebar-projects__icon'];

  projects.forEach((project, index) => {
    const listItem = dom.createElement('li', 'nav-list__item');
    if (index === 0) listItem.classList.add('sidebar-projects__item--active');

    const button = dom.createElement('button', 'nav-list__link');

    const icon = createIcon(ICONS.hashtag, iconClasses);
    const text = dom.createElement('span', 'nav-list__text', project.name);

    button.append(icon, text);
    listItem.append(button);
    list.append(listItem);
  });

  return list;
}

export function createSidebarProjects(projects) {
  const section = dom.createElement('section', 'sidebar-projects');

  const { header, toggleBtn } = createHeader();
  const projectList = createProjectList(projects);

  toggleBtn.addEventListener('click', () => {
    section.classList.toggle('sidebar-projects--collapsed');
  });

  section.append(header, projectList);

  return section;
}
