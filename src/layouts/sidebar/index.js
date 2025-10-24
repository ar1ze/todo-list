import { createSidebarHeader } from './header';
import { createSidebarViews } from './views';
import { createSidebarProjects } from './projects';

import * as dom from '../../utils/dom';

export function populate() {
  const sidebar = dom.getElement('.sidebar');

  const header = createSidebarHeader(sidebar);
  const views = createSidebarViews();
  const projects = createSidebarProjects();

  sidebar.append(header, views, projects);
}
