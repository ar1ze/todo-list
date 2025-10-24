export function createElement(tag, className = '', textContent = '') {
  const element = document.createElement(tag);

  if (className) element.className = className;
  if (textContent) element.textContent = textContent;
  if (tag === 'button') element.type = 'button';

  return element;
}

export function getElement(selector) {
  return document.querySelector(selector);
}

export function getElements(selector) {
  return Array.from(document.querySelectorAll(selector));
}

export function toggleClass(element, className) {
  element.classList.toggle(className);
}

export function addEvent(element, event, handler) {
  element.addEventListener(event, handler);
}
