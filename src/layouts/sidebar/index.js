import { createSidebarHeader } from './header';
import { createSidebarViews } from './views';
import { createSidebarProjects } from './projects';

import * as dom from '../../utils/dom';

export function populate(projects) {
  const sidebar = dom.getElement('.sidebar');

  const header = createSidebarHeader(sidebar);
  const viewsNav = createSidebarViews();
  const projectsNav = createSidebarProjects(projects);

  sidebar.append(header, viewsNav, projectsNav);
}
