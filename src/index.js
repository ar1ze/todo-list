import './scss/main.scss';

import * as sidebar from './layouts/sidebar';
import * as loader from './utils/loader';

import * as sample from './utils/sample';

class App {
  constructor() {
    this.loader = loader.createDisplay();
    this.projects = sample.projects();
    this._init();
  }

  _init() {
    sidebar.populate(this.projects);
    window.addEventListener('load', () => loader.hideDisplay(this.loader));
  }
}

new App();
