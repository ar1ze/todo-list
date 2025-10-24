import { createSidebarHeader } from './header';
import { createSidebarViews } from './views';

import * as dom from '../../utils/dom';

export function populateSidebar() {
  const sidebar = dom.getElement('.sidebar');

  const header = createSidebarHeader(sidebar);
  const views = createSidebarViews();

  sidebar.append(header, views);
}
