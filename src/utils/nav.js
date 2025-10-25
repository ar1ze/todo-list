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

let activePage = PAGE.TODAY;

export function getCurrentPage() {
  return activePage;
}

export function setActivePage(page) {
  activePage = page;
}

export function clearActiveStates(container) {
  const activeItems = container.querySelectorAll('.nav-list__link--active');
  activeItems.forEach((item) =>
    item.classList.remove('nav-list__link--active')
  );

  const activeOtherItems = container.querySelectorAll(
    '.sidebar-projects__header--active'
  );
  activeOtherItems.forEach((item) =>
    item.classList.remove('sidebar-projects__header--active')
  );
}

export function handleNavClick(event, container, page, pageType) {
  if (getCurrentPage() === page) return;

  clearActiveStates(container);

  const listLink = event.target.closest('.nav-list__link');
  listLink.classList.add('nav-list__link--active');

  setActivePage(page);
  dispatchPageChange(page, pageType);
}

export function dispatchPageChange(page, pageType) {
  const event = new CustomEvent('pageChange', {
    detail: { page, pageType },
  });
  window.dispatchEvent(event, pageType);
}

export function onPageChange(callback) {
  window.addEventListener('pageChange', (event) => {
    callback(event.detail);
  });
}
