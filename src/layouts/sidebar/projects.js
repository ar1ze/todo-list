import { ICONS, createIcon } from '../../utils/icons';
import * as dom from '../../utils/dom';

function createSidebarProjectHeader() {
  const header = dom.createElement('div', 'sidebar-projects__header');
  const title = dom.createElement(
    'h3',
    'sidebar-projects__title',
    'My Projects'
  );

  const toggleClassList = [
    'sidebar-projects__icon',
    'icon--large',
    'icon--hover',
  ];
  const toggleBtn = createIcon(ICONS.chevronDown, toggleClassList, 'button');
  toggleBtn.type = 'button';

  header.append(title, toggleBtn);

  return header;
}

export function createSidebarProjects() {
  const section = dom.createElement('section', 'sidebar-projects');

  const header = createSidebarProjectHeader();

  section.append(header);

  return section;
}
