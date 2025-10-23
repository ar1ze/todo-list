import { icons, createIcon } from '../utils/icons';

import * as dom from '../utils/dom';

function createSidebarHeader() {
  const header = dom.createElement('div', 'sidebar-header');

  const user = dom.createElement('div', 'sidebar-header__user');
  const avatar = dom.createElement('div', 'sidebar-header__avatar');
  const username = dom.createElement(
    'span',
    'sidebar-header__username',
    'User'
  );
  user.append(avatar, username);

  const icon = createIcon(icons.sidebarMinimalistic, [
    'sidebar-header__icon',
    'icon--large',
    'icon--thin',
    'icon--hover',
  ]);

  header.append(user, icon);

  return header;
}

export function populateSidebar() {
  const sidebar = dom.getElement('.sidebar');
  const sidebarHeader = createSidebarHeader();
  sidebar.append(sidebarHeader);
}
