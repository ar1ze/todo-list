import { createSidebarHeader } from './header';
import { createSidebarViews } from './views';
import { createSidebarProjects } from './projects';

export function populate(sidebar, projects) {
  const header = createSidebarHeader(sidebar);
  const viewsNav = createSidebarViews(sidebar);
  const projectsNav = createSidebarProjects(sidebar, projects);

  sidebar.append(header, viewsNav, projectsNav);
}
