import './scss/main.scss';

import * as sidebar from './layouts/sidebar';

import * as dom from './utils/dom';
import * as loader from './utils/loader';
import * as nav from './utils/nav';
import * as sample from './utils/sample';

class App {
  constructor() {
    this.loader = loader.createDisplay();
    this.projects = sample.projects();

    this.sidebar = dom.getElement('.sidebar');
    this.main = dom.getElement('.main');

    this._init();
  }

  _init() {
    sidebar.populate(this.sidebar, this.projects);
    window.addEventListener('load', () => loader.hideDisplay(this.loader));

    nav.onPageChange((detail) => {
      this.updateMainContent(detail.page, detail.pageType);
    });
  }

  _updateProjectContent(page) {
    switch (page) {
      case nav.PAGE.MY_PROJECTS:
        break;
      default:
        break;
    }
  }

  _updateViewContent(page) {
    switch (page) {
      case nav.PAGE.TODAY:
        break;
      case nav.PAGE.THIS_WEEK:
        break;
      case nav.PAGE.COMPLETED:
        break;
    }
  }

  updateMainContent(page, type) {
    if (type === nav.PAGE_TYPE.PROJECT) {
      this._updateProjectContent(page);
    } else if (type === nav.PAGE_TYPE.VIEW) {
      this._updateViewContent(page);
    }
  }
}

new App();
