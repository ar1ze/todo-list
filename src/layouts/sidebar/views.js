import { ICONS, createIcon } from '../../utils/icons';
import * as dom from '../../utils/dom';

export function createSidebarViews() {
  const iconClasses = ['sidebar-views__icon'];

  const viewItems = [
    { name: 'Today', icon: createIcon(ICONS.calendarToday, iconClasses) },
    {
      name: 'This Week',
      icon: createIcon(ICONS.calendarUpcoming, iconClasses),
    },
    { name: 'Completed', icon: createIcon(ICONS.checkAll, iconClasses) },
  ];

  const nav = dom.createElement('nav', 'sidebar-views');
  const list = dom.createElement('ul', 'nav-list');

  viewItems.forEach((item) => {
    const listItem = dom.createElement('li', 'nav-list__item');
    const button = dom.createElement('button', 'nav-list__link');

    const text = dom.createElement('span', 'nav-list__text', item.name);

    button.append(item.icon, text);
    listItem.append(button);
    list.append(listItem);
  });

  nav.append(list);
  return nav;
}
