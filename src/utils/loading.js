import * as dom from './dom';

export function createLoadingScreen() {
  const loader = dom.createElement('div', 'loading-screen');
  document.body.prepend(loader);
  return loader;
}

export function hideLoadingScreen(loader) {
  setTimeout(() => {
    loader.remove();
  }, 100);
}
