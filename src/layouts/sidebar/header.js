import * as icon from '../../utils/icon';
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
    icon.LARGE,
    icon.THIN,
    icon.HOVER,
  ];
  const toggle = icon.create(icon.sidebarMinimalistic, iconClasses, 'button');

  dom.addEvent(toggle, 'click', () =>
    dom.toggleClass(sidebar, 'sidebar--collapse')
  );

  header.append(user, toggle);

  return header;
}
