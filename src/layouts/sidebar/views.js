import * as icon from '../../utils/icon';
import * as dom from '../../utils/dom';
import * as nav from '../../utils/nav';

const BEM_BLOCK_VIEWS = 'sidebar-views';
const BEM_BLOCK_NAV = 'nav-list';

const CLASS_NAMES_VIEWS = {
  BLOCK: BEM_BLOCK_VIEWS,
  ICON: `${BEM_BLOCK_VIEWS}__icon`,
};

const CLASS_NAMES_NAV = {
  BLOCK: BEM_BLOCK_NAV,
  ITEM: `${BEM_BLOCK_NAV}__item`,
  LINK: `${BEM_BLOCK_NAV}__link`,
  TEXT: `${BEM_BLOCK_NAV}__text`,
};

export function createSidebarViews(sidebar) {
  const iconClasses = [CLASS_NAMES_VIEWS.ICON];

  const viewItems = [
    {
      name: nav.PAGE.TODAY,
      icon: icon.create(icon.calendarToday, iconClasses),
    },
    {
      name: nav.PAGE.THIS_WEEK,
      icon: icon.create(icon.calendarUpcoming, iconClasses),
    },
    {
      name: nav.PAGE.COMPLETED,
      icon: icon.create(icon.checkAll, iconClasses),
    },
  ];

  const navView = dom.createElement('nav', CLASS_NAMES_VIEWS.BLOCK);
  const list = dom.createElement('ul', CLASS_NAMES_NAV.BLOCK);

  viewItems.forEach((item) => {
    const listItem = dom.createElement('li', CLASS_NAMES_NAV.ITEM);

    const button = dom.createElement('button', CLASS_NAMES_NAV.LINK);
    const text = dom.createElement('span', CLASS_NAMES_NAV.TEXT, item.name);

    button.append(item.icon, text);
    listItem.append(button);

    button.addEventListener('click', (event) => {
      nav.handleNavClick(event, sidebar, item.name, nav.PAGE_TYPE.VIEW);
    });

    list.append(listItem);
  });

  navView.append(list);

  return navView;
}
