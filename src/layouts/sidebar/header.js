import { ICONS, createIcon } from '../../utils/icons';

import * as dom from '../../utils/dom';

export function createSidebarHeader(sidebar) {
  const header = dom.createElement('header', 'sidebar-header');

  const user = dom.createElement('div', 'sidebar-header__user');
  const avatar = dom.createElement('div', 'sidebar-header__avatar');
  const username = dom.createElement(
    'span',
    'sidebar-header__username',
    'User'
  );
  user.append(avatar, username);

  const iconClasses = [
    'sidebar-header__toggle',
    'icon--large',
    'icon--thin',
    'icon--hover',
  ];
  const icon = createIcon(ICONS.sidebarMinimalistic, iconClasses, 'button');

  dom.addEvent(icon, 'click', () =>
    dom.toggleClass(sidebar, 'sidebar--collapse')
  );

  header.append(user, icon);

  return header;
}
