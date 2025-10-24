import * as dom from './dom';

export function createDisplay() {
  const loader = dom.createElement('div', 'loading-screen');
  document.body.prepend(loader);
  return loader;
}

export function hideDisplay(loader) {
  setTimeout(() => {
    loader.remove();
  }, 100);
}
