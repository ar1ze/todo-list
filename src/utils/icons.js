import * as dom from './dom';

import calendarToday from '../assets/icons/calendar-today.svg';
import calendarUpcoming from '../assets/icons/calendar-upcoming.svg';
import checkAll from '../assets/icons/check-all.svg';
import checkCircle from '../assets/icons/check-circle.svg';
import check from '../assets/icons/check.svg';
import chevronRight from '../assets/icons/chevron-right.svg';
import chevronDown from '../assets/icons/chevron-down.svg';
import close from '../assets/icons/close.svg';
import edit from '../assets/icons/edit.svg';
import hashtag from '../assets/icons/hashtag.svg';
import menu from '../assets/icons/menu.svg';
import more from '../assets/icons/more.svg';
import plusSquare from '../assets/icons/plus-square.svg';
import plus from '../assets/icons/plus.svg';
import sidebarMinimalistic from '../assets/icons/sidebar-minimalistic.svg';
import trash from '../assets/icons/trash.svg';

export const ICONS = {
  calendarToday,
  calendarUpcoming,
  checkAll,
  checkCircle,
  check,
  chevronRight,
  chevronDown,
  close,
  edit,
  hashtag,
  menu,
  more,
  plus,
  plusSquare,
  sidebarMinimalistic,
  trash,
};

export function createIcon(icon, className = [], tag = 'span') {
  const iconContainer = dom.createElement(tag, 'icon');

  if (className) iconContainer.classList.add(...className);
  iconContainer.innerHTML = icon;

  if (tag === 'button') iconContainer.type = 'button';

  return iconContainer;
}
