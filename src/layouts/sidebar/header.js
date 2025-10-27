import * as icon from '../../utils/icon';
import * as dom from '../../utils/dom';

const BEM_BLOCK_HEADER = 'sidebar-header';

const CLASS_NAMES_HEADER = {
  BLOCK: BEM_BLOCK_HEADER,
  USER: `${BEM_BLOCK_HEADER}__user`,
  AVATAR: `${BEM_BLOCK_HEADER}__avatar`,
  USERNAME: `${BEM_BLOCK_HEADER}__username`,
  TOGGLE: `${BEM_BLOCK_HEADER}__toggle`,
};

const CLASS_NAMES_SIDEBAR = {
  MODIFIERS: {
    COLLAPSE: 'sidebar--collapse',
  },
};

export function createSidebarHeader(sidebar) {
  const header = dom.createElement('header', CLASS_NAMES_HEADER.BLOCK);

  const user = dom.createElement('div', CLASS_NAMES_HEADER.USER);
  const avatar = dom.createElement('div', CLASS_NAMES_HEADER.AVATAR);
  const username = dom.createElement(
    'span',
    CLASS_NAMES_HEADER.USERNAME,
    'User'
  );
  user.append(avatar, username);

  const iconClasses = [
    CLASS_NAMES_HEADER.TOGGLE,
    icon.LARGE,
    icon.THIN,
    icon.HOVER,
  ];
  const toggle = icon.create(icon.sidebarMinimalistic, iconClasses, 'button');

  dom.addEvent(toggle, 'click', () =>
    dom.toggleClass(sidebar, CLASS_NAMES_SIDEBAR.MODIFIERS.COLLAPSE)
  );

  header.append(user, toggle);

  return header;
}
