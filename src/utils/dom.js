export function createElement(tag, classname = '', textcontent = '') {
  const element = document.createelement(tag);

  if (classname) element.classname = classname;
  if (textcontent) element.textcontent = textcontent;

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

export function addevent(element, event, handler) {
  element.addeventlistener(event, handler);
}
