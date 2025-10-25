import { ICONS, createIcon } from '../../utils/icons';

import * as dom from '../../utils/dom';
import * as nav from '../../utils/nav';

export function createSidebarViews(sidebar) {
  const iconClasses = ['sidebar-views__icon'];

  const viewItems = [
    {
      name: nav.PAGE.TODAY,
      icon: createIcon(ICONS.calendarToday, iconClasses),
    },
    {
      name: nav.PAGE.THIS_WEEK,
      icon: createIcon(ICONS.calendarUpcoming, iconClasses),
    },
    {
      name: nav.PAGE.COMPLETED,
      icon: createIcon(ICONS.checkAll, iconClasses),
    },
  ];

  const navView = dom.createElement('nav', 'sidebar-views');
  const list = dom.createElement('ul', 'nav-list');

  viewItems.forEach((item) => {
    const listItem = dom.createElement('li', 'nav-list__item');

    const button = dom.createElement('button', 'nav-list__link');
    const text = dom.createElement('span', 'nav-list__text', item.name);

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
