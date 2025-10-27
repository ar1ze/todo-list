import { populateMyProjects } from './myProjects';
import * as nav from '../../utils/nav';

export function populateMain(main, page, pageType, projects) {
  if (pageType === nav.PAGE_TYPE.PROJECT) updateProjectContent(main, page, projects);
  else if (pageType === nav.PAGE_TYPE.VIEW) updateViewContent(main, page, projects);
}

export function updateProjectContent(main, page, projects) {
  switch (page) {
    case nav.PAGE.MY_PROJECTS:
      populateMyProjects(main, projects);
    default:
      break;
  }
}

export function updateViewContent(main, page, projects) {
  switch (page) {
    case nav.PAGE.TODAY:
      break;
    case nav.PAGE.THIS_WEEK:
      break;
    case nav.PAGE.COMPLETED:
      break;
  }
}
