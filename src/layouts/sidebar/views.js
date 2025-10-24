import { icons, createIcon } from '../../utils/icons';
import * as dom from '../../utils/dom';

export function createSidebarViews() {
  const classList = ['views__icon', 'icon--large'];

  const viewItems = [
    { name: 'Today', icon: createIcon(icons.calendarToday, classList) },
    { name: 'This Week', icon: createIcon(icons.calendarUpcoming, classList) },
    { name: 'Completed', icon: createIcon(icons.checkAll, classList) },
  ];

  const nav = dom.createElement('nav', 'sidebar-views');
  const list = dom.createElement('ul', 'sidebar-views__list');

  viewItems.forEach((item) => {
    const listItem = dom.createElement('li', 'sidebar-views__item');
    const button = dom.createElement('button', 'sidebar-views__link');
    button.type = 'button';

    const text = dom.createElement('span', 'sidebar-views__text', item.name);

    button.append(item.icon, text);
    listItem.append(button);
    list.append(listItem);
  });

  nav.append(list);
  return nav;
}
