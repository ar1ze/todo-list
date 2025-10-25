import * as dom from './dom';

export const PAGE = {
  TODAY: 'Today',
  THIS_WEEK: 'This Week',
  COMPLETED: 'Completed',
  MY_PROJECTS: 'My Projects',
  PROJECTS: 'Projects',
};

export const PAGE_TYPE = {
  VIEW: 'view',
  PROJECT: 'project',
};

const state = {
  activePage: null,
};

export const SIBLING_CLASSES = {
  NAV_LINK: 'nav-list__link',
  SIDEBAR_HEADER: 'sidebar-projects__header',
};

export const ACTIVE_CLASSES = {
  NAV_LINK: 'nav-list__link--active',
  SIDEBAR_HEADER: 'sidebar-projects__header--active',
};

export const NAV_CLASS_MAP = {
  [PAGE.TODAY]: {
    siblingClass: SIBLING_CLASSES.NAV_LINK,
    activeClass: ACTIVE_CLASSES.NAV_LINK,
  },
  [PAGE.THIS_WEEK]: {
    siblingClass: SIBLING_CLASSES.NAV_LINK,
    activeClass: ACTIVE_CLASSES.NAV_LINK,
  },
  [PAGE.COMPLETED]: {
    siblingClass: SIBLING_CLASSES.NAV_LINK,
    activeClass: ACTIVE_CLASSES.NAV_LINK,
  },
  [PAGE.MY_PROJECTS]: {
    siblingClass: SIBLING_CLASSES.SIDEBAR_HEADER,
    activeClass: ACTIVE_CLASSES.SIDEBAR_HEADER,
  },
  [PAGE.PROJECTS]: {
    siblingClass: SIBLING_CLASSES.NAV_LINK,
    activeClass: ACTIVE_CLASSES.NAV_LINK,
  },
};

export function getCurrentPage() {
  return state.activePage;
}

export function setActivePage(page) {
  state.activePage = page;
}

export function getSiblingActiveClass(page) {
  return (
    NAV_CLASS_MAP[page] || {
      siblingClass: 'nav-list__link',
      activeClass: ACTIVE_CLASSES.NAV_LINK,
    }
  );
}

export function clearActiveStates(container) {
  Object.values(ACTIVE_CLASSES).forEach((activeClass) => {
    container
      .querySelectorAll(`.${activeClass}`)
      .forEach((el) => el.classList.remove(activeClass));
  });
}

export function initializeCurrentPage(page) {
  setActivePage(page);
  const { siblingClass, activeClass } = getSiblingActiveClass(page);
  const item = dom.getElement(`.${siblingClass}`);
  if (item) item.classList.add(activeClass);
}

export function handleNavClick(event, container, page, pageType) {
  if (getCurrentPage() === page) return;

  clearActiveStates(container);

  const { siblingClass, activeClass } = getSiblingActiveClass(page);
  const siblingItem = event.target.closest(`.${siblingClass}`);
  if (siblingItem) siblingItem.classList.add(activeClass);

  setActivePage(page);
  dispatchPageChange(page, pageType);
}

export function dispatchPageChange(page, pageType) {
  const event = new CustomEvent('pageChange', {
    detail: { page, pageType },
  });
  window.dispatchEvent(event);
}

export function onPageChange(callback) {
  window.addEventListener('pageChange', (event) => {
    callback(event.detail);
  });
}
