import * as icon from '../../utils/icon';
import * as dom from '../../utils/dom';
import * as nav from '../../utils/nav';
import * as tooltip from '../../components/tooltip';

const BEM_BLOCK = 'my-projects';

const CLASS_NAMES = {
  BLOCK: BEM_BLOCK,
  TITLE: `${BEM_BLOCK}__title`,
  SECTION: `${BEM_BLOCK}__section`,

  HEADER: {
    CONTAINER: `${BEM_BLOCK}__header`,
    LABEL: `${BEM_BLOCK}__header-label`,
  },

  ADD_BUTTON: {
    CONTAINER: `${BEM_BLOCK}__add-project-button`,
    ICON: `${BEM_BLOCK}__add-project-button-icon`,
    LABEL: `${BEM_BLOCK}__add-project-button-label`,
  },

  PROJECT_LIST: `${BEM_BLOCK}__project-list`,
  PROJECT_ITEM: {
    CONTAINER: `${BEM_BLOCK}__project-item`,
    LINK: `${BEM_BLOCK}__project-link`,
    LINK_CONTENT: `${BEM_BLOCK}__project-link-content`,
    LINK_HASHTAG: `${BEM_BLOCK}__project-link-hashtag`,
    LINK_LABEL: `${BEM_BLOCK}__project-link-label`,
    LINK_OPTIONS: `${BEM_BLOCK}__project-link-options`,
  },

  BUTTON_ICON: `${BEM_BLOCK}__button-icon`,
  TOOLTIP_WRAPPER: 'tooltip-wrapper',
};

function createProjectTitle() {
  const title = dom.createElement('h3', CLASS_NAMES.TITLE, 'My Projects');
  return title;
}

function createAddProjectButton() {
  const button = dom.createElement('button', CLASS_NAMES.ADD_BUTTON.CONTAINER);
  const iconClasses = [CLASS_NAMES.ADD_BUTTON.ICON, icon.LARGE, icon.THIN];
  const plusIcon = icon.create(icon.plus, iconClasses);
  const label = dom.createElement(
    'span',
    CLASS_NAMES.ADD_BUTTON.LABEL,
    'Add Project'
  );

  button.append(plusIcon, label);
  return button;
}

function createProjectHeader(projects) {
  const header = dom.createElement('header', CLASS_NAMES.HEADER.CONTAINER);
  const addProject = createAddProjectButton();
  header.append(addProject);

  const title = dom.createElement('h6', CLASS_NAMES.HEADER.LABEL);
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

function createProjectLinkContent(projectName, iconClasses) {
  const content = dom.createElement(
    'span',
    CLASS_NAMES.PROJECT_ITEM.LINK_CONTENT
  );
  const hashtag = icon.create(icon.hashtag, iconClasses);
  hashtag.classList.add(CLASS_NAMES.PROJECT_ITEM.LINK_HASHTAG);

  const label = dom.createElement(
    'span',
    CLASS_NAMES.PROJECT_ITEM.LINK_LABEL,
    projectName
  );
  content.append(hashtag, label);

  return content;
}

function createOptionsWrapper(projectId, iconClasses) {
  const optionsWrapper = dom.createElement('div', CLASS_NAMES.TOOLTIP_WRAPPER);
  const optionsButton = dom.createElement(
    'span',
    CLASS_NAMES.PROJECT_ITEM.LINK_OPTIONS
  );
  const optionsIcon = icon.create(icon.moreHollow, iconClasses);
  optionsButton.append(optionsIcon);

  const tooltipElement = tooltip.create(projectId, 'left');

  dom.addEvent(optionsButton, 'click', (e) => {
    e.stopPropagation();
    tooltip.toggle(tooltipElement);
  });

  optionsWrapper.append(optionsButton, tooltipElement);
  return optionsWrapper;
}

function createProjectItem(project) {
  const iconClasses = [CLASS_NAMES.BUTTON_ICON, icon.LARGE, icon.THIN];

  const item = dom.createElement('li', CLASS_NAMES.PROJECT_ITEM.CONTAINER);
  const projectLink = dom.createElement(
    'button',
    CLASS_NAMES.PROJECT_ITEM.LINK
  );

  const content = createProjectLinkContent(project.name, iconClasses);
  const optionsWrapper = createOptionsWrapper(project.id, iconClasses);

  projectLink.append(content, optionsWrapper);
  item.append(projectLink);

  return item;
}

function createProjectSection(projects) {
  const sidebar = dom.getElement('.sidebar');

  const section = dom.createElement('section', CLASS_NAMES.SECTION);
  const header = createProjectHeader(projects);

  const list = dom.createElement('ul', CLASS_NAMES.PROJECT_LIST);

  projects.forEach((project) => {
    const item = createProjectItem(project);
    item.addEventListener('click', (event) => {
      nav.handleNavClick(
        event,
        sidebar,
        project.name,
        nav.PAGE_TYPE.PROJECT,
        false
      );
    });
    list.append(item);
  });

  section.append(header, list);
  return section;
}

export function populate(main, projects) {
  const body = dom.createElement('div', CLASS_NAMES.BLOCK);

  const title = createProjectTitle();
  const content = createProjectSection(projects);

  body.append(title, content);
  main.append(body);
}
