import * as icon from '../../utils/icon';
import * as dom from '../../utils/dom';
import * as nav from '../../utils/nav';

const BEM_BLOCK_PROJECTS = 'sidebar-projects';
const BEM_BLOCK_NAV = 'nav-list';

const CLASS_NAMES_PROJECTS = {
  BLOCK: BEM_BLOCK_PROJECTS,
  HEADER: `${BEM_BLOCK_PROJECTS}__header`,
  TITLE: `${BEM_BLOCK_PROJECTS}__title`,
  HEADER_ICONS: `${BEM_BLOCK_PROJECTS}__header-icons`,
  HEADER_NEW_PROJECT: `${BEM_BLOCK_PROJECTS}__header-new-project`,
  HEADER_EXPAND_COLLAPSE: `${BEM_BLOCK_PROJECTS}__header-expand-collapse`,
  ICON: `${BEM_BLOCK_PROJECTS}__icon`,
  MODIFIERS: {
    COLLAPSED: `${BEM_BLOCK_PROJECTS}--collapsed`,
  },
};

const CLASS_NAMES_NAV = {
  BLOCK: BEM_BLOCK_NAV,
  ITEM: `${BEM_BLOCK_NAV}__item`,
  LINK: `${BEM_BLOCK_NAV}__link`,
  TEXT: `${BEM_BLOCK_NAV}__text`,
};

function createHeader(sidebar) {
  const header = dom.createElement('button', CLASS_NAMES_PROJECTS.HEADER);
  const label = dom.createElement(
    'span',
    CLASS_NAMES_PROJECTS.TITLE,
    'My Projects'
  );

  const actions = dom.createElement('span', CLASS_NAMES_PROJECTS.HEADER_ICONS);
  const toggleClasses = [icon.LARGE, icon.HOVER, icon.THIN];

  const newProject = icon.create(icon.plus, toggleClasses);
  newProject.classList.add(CLASS_NAMES_PROJECTS.HEADER_NEW_PROJECT);

  const expandCollapse = icon.create(icon.chevronDown, toggleClasses);
  expandCollapse.classList.add(CLASS_NAMES_PROJECTS.HEADER_EXPAND_COLLAPSE);

  header.addEventListener('click', (event) => {
    if (event.target.closest(CLASS_NAMES_PROJECTS.HEADER_ICONS)) return;

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
  const list = dom.createElement('ul', CLASS_NAMES_NAV.BLOCK);
  const iconClasses = [CLASS_NAMES_PROJECTS.ICON];

  projects.forEach((project) => {
    const listItem = dom.createElement('li', CLASS_NAMES_NAV.ITEM);
    const button = dom.createElement('button', CLASS_NAMES_NAV.LINK);

    const hashtag = icon.create(icon.hashtag, iconClasses);
    const text = dom.createElement('span', CLASS_NAMES_NAV.TEXT, project.name);

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
  const section = dom.createElement('section', CLASS_NAMES_PROJECTS.BLOCK);

  const { header, toggleBtn } = createHeader(sidebar);
  const projectList = createProjectList(sidebar, projects);

  toggleBtn.addEventListener('click', () => {
    section.classList.toggle(CLASS_NAMES_PROJECTS.MODIFIERS.COLLAPSED);
  });

  section.append(header, projectList);

  return section;
}
