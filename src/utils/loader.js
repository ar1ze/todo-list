import * as dom from './dom';

const CLASS_NAMES = {
  LOADER: 'loading-screen',
};

export function createDisplay() {
  const loader = dom.createElement('div', CLASS_NAMES.LOADER);
  document.body.prepend(loader);
  return loader;
}

export function hideDisplay(loader) {
  setTimeout(() => {
    loader.remove();
  }, 100);
}
