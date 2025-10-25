import { ICONS, createIcon } from '../../utils/icons';

import * as dom from '../../utils/dom';
import * as nav from '../../utils/nav';

function createHeader(sidebar) {
  const header = dom.createElement('button', 'sidebar-projects__header');
  const title = dom.createElement(
    'span',
    'sidebar-projects__title',
    'My Projects'
  );

  const toggleClasses = [
    'sidebar-projects__header-icon',
    'icon--large',
    'icon--hover',
  ];
  const toggleBtn = createIcon(ICONS.chevronDown, toggleClasses, 'button');

  header.addEventListener('click', (event) => {
    if (event.target.closest('.sidebar-projects__header-icon')) return;

    nav.clearActiveStates(sidebar);
    const listLink = event.target.closest('.sidebar-projects__header');
    listLink.classList.add('sidebar-projects__header--active');

    nav.setActivePage(nav.PAGE.MY_PROJECTS);
    nav.dispatchPageChange(nav.PAGE.MY_PROJECTS, nav.PAGE_TYPE.PROJECT);
  });

  header.append(title, toggleBtn);
  return { header, toggleBtn };
}

function createProjectList(sidebar, projects) {
  const list = dom.createElement('ul', 'nav-list');
  const iconClasses = ['sidebar-projects__icon'];

  projects.forEach((project) => {
    const listItem = dom.createElement('li', 'nav-list__item');
    const button = dom.createElement('button', 'nav-list__link');

    const icon = createIcon(ICONS.hashtag, iconClasses);
    const text = dom.createElement('span', 'nav-list__text', project.name);

    button.append(icon, text);
    listItem.append(button);

    button.addEventListener('click', (event) => {
      nav.handleNavClick(event, sidebar, project.name, nav.PAGE_TYPE.PROJECT);
    });
    list.append(listItem);
  });

  return list;
}

export function createSidebarProjects(sidebar, projects) {
  const section = dom.createElement('section', 'sidebar-projects');

  const { header, toggleBtn } = createHeader(sidebar);
  const projectList = createProjectList(sidebar, projects);

  toggleBtn.addEventListener('click', () => {
    section.classList.toggle('sidebar-projects--collapsed');
  });

  section.append(header, projectList);

  return section;
}
