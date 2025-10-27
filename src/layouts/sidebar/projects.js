import * as icon from '../../utils/icon';
import * as dom from '../../utils/dom';
import * as nav from '../../utils/nav';

function createHeader(sidebar) {
  const header = dom.createElement('button', 'sidebar-projects__header');
  const label = dom.createElement(
    'span',
    'sidebar-projects__title',
    'My Projects'
  );

  const actions = dom.createElement('span', 'sidebar-projects__header-icons');
  const toggleClasses = [icon.LARGE, icon.HOVER, icon.THIN];

  const newProject = icon.create(icon.plus, toggleClasses);
  newProject.classList.add('sidebar-projects__header-new-project');

  const expandCollapse = icon.create(icon.chevronDown, toggleClasses);
  expandCollapse.classList.add('sidebar-projects__header-expand-collapse');

  header.addEventListener('click', (event) => {
    if (event.target.closest('.sidebar-projects__header-icons')) return;

    nav.handleNavClick(
      event,
      sidebar,
      nav.PAGE.MY_PROJECTS,
      nav.PAGE_TYPE.PROJECT
    );
  });

  actions.append(newProject, expandCollapse);
  header.append(label, actions);
  return { header, toggleBtn: expandCollapse };
}

function createProjectList(sidebar, projects) {
  const list = dom.createElement('ul', 'nav-list');
  const iconClasses = ['sidebar-projects__icon'];

  projects.forEach((project) => {
    const listItem = dom.createElement('li', 'nav-list__item');
    const button = dom.createElement('button', 'nav-list__link');

    const hashtag = icon.create(icon.hashtag, iconClasses);
    const text = dom.createElement('span', 'nav-list__text', project.name);

    button.append(hashtag, text);
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
