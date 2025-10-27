import * as icon from '../utils/icon';
import * as dom from '../utils/dom';

const VISIBLE_CLASS = 'tooltip--visible';
const BUTTON_SELECTOR = '.my-projects__project-link-options';
const PROJECT_ITEM_SELECTOR = '.my-projects__project-item';
const BUTTON_ACTIVE_CLASS = 'my-projects__project-link-options--active';
const PROJECT_ITEM_ACTIVE_CLASS = 'my-projects__project-item--active';

function createTooltipItem(iconType, label, isDanger = false) {
  const menuIconClasses = ['tooltip__icon', icon.SMALL];
  const item = dom.createElement('li', 'tooltip__item');
  const button = dom.createElement('button', 'tooltip__button');

  if (isDanger) button.classList.add('tooltip__button--danger');

  const itemIcon = icon.create(iconType, menuIconClasses);
  const itemLabel = dom.createElement('span', 'tooltip__label', label);

  button.append(itemIcon, itemLabel);
  item.append(button);

  return item;
}

function createTooltipList() {
  const list = dom.createElement('ul', 'tooltip__list');
  const editItem = createTooltipItem(icon.edit, 'Edit');
  const deleteItem = createTooltipItem(icon.trash, 'Delete', true);

  list.append(editItem, deleteItem);

  return list;
}

export function create(projectId, align = 'right') {
  const tooltip = dom.createElement('div', 'tooltip');
  tooltip.classList.add(`tooltip--align-${align}`);
  tooltip.dataset.projectId = projectId;

  const list = createTooltipList();
  tooltip.append(list);

  return tooltip;
}

function removeActiveState(wrapper) {
  const button = wrapper.querySelector(BUTTON_SELECTOR);
  const projectItem = wrapper.closest(PROJECT_ITEM_SELECTOR);

  if (button) {
    button.classList.remove(BUTTON_ACTIVE_CLASS);
  }
  if (projectItem) {
    projectItem.classList.remove(PROJECT_ITEM_ACTIVE_CLASS);
  }
}

function addActiveState(wrapper) {
  const button = wrapper.querySelector(BUTTON_SELECTOR);
  const projectItem = wrapper.closest(PROJECT_ITEM_SELECTOR);

  if (button) {
    button.classList.add(BUTTON_ACTIVE_CLASS);
  }
  if (projectItem) {
    projectItem.classList.add(PROJECT_ITEM_ACTIVE_CLASS);
  }
}

function closeTooltip(tooltip) {
  tooltip.classList.remove(VISIBLE_CLASS);

  const wrapper = tooltip.closest('.tooltip-wrapper');
  if (wrapper) {
    removeActiveState(wrapper);
  }
}

function openTooltip(tooltip) {
  tooltip.classList.add(VISIBLE_CLASS);

  const wrapper = tooltip.closest('.tooltip-wrapper');
  if (wrapper) {
    addActiveState(wrapper);
  }
}

function closeAllTooltips() {
  const allTooltips = dom.getElements(`.${VISIBLE_CLASS}`);
  allTooltips.forEach((t) => closeTooltip(t));
}

export function toggle(tooltip) {
  const isVisible = tooltip.classList.contains(VISIBLE_CLASS);

  closeAllTooltips();

  if (!isVisible) {
    openTooltip(tooltip);
  }
}

export function closeAll() {
  closeAllTooltips();
}

export function initializeClickOutside() {
  dom.addEvent(document, 'click', (e) => {
    const clickedInsideTooltip = e.target.closest('.tooltip-wrapper');
    if (!clickedInsideTooltip) {
      closeAll();
    }
  });
}
