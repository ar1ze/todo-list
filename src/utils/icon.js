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
import moreSolid from '../assets/icons/more-solid.svg';
import moreHollow from '../assets/icons/more-hollow.svg';
import plusSquare from '../assets/icons/plus-square.svg';
import plus from '../assets/icons/plus.svg';
import sidebarMinimalistic from '../assets/icons/sidebar-minimalistic.svg';
import trash from '../assets/icons/trash.svg';

const LARGE = 'icon--large';
const SMALL = 'icon--small';
const THIN = 'icon--thin';
const BOLD = 'icon--bold';
const HOVER = 'icon--hover';

export { LARGE, SMALL, THIN, BOLD, HOVER };

export {
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
  moreSolid,
  moreHollow,
  plus,
  plusSquare,
  sidebarMinimalistic,
  trash,
};

export function create(icon, className = [], tag = 'span') {
  const iconContainer = dom.createElement(tag, 'icon');

  if (className) iconContainer.classList.add(...className);
  iconContainer.innerHTML = icon;

  return iconContainer;
}
