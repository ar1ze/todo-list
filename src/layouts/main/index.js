import * as myProjects from './myProjects';
import * as projectView from './projectView';

import * as nav from '../../utils/nav';

export function populateMain(main, page, pageType, projects) {
  if (pageType === nav.PAGE_TYPE.PROJECT)
    updateProjectContent(main, page, projects);
  else if (pageType === nav.PAGE_TYPE.VIEW)
    updateViewContent(main, page, projects);
}

export function updateProjectContent(main, page, projects) {
  switch (page) {
    case nav.PAGE.MY_PROJECTS:
      myProjects.populate(main, projects);
      break;
    default:
      const project = projects.find((proj) => proj.name === page);
      projectView.populate(main, project);
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
