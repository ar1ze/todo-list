import { createSidebarHeader } from './header';
import * as dom from '../../utils/dom';

export function populateSidebar() {
  const sidebar = dom.getElement('.sidebar');
  const sidebarHeader = createSidebarHeader(sidebar);
  sidebar.append(sidebarHeader);
}
