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

    this.startPage = nav.PAGE.MY_PROJECTS;
    this.currentPage = this.startPage;

    this._setup();
  }

  _setup() {
    sidebar.populate(this.sidebar, this.projects);
    nav.initializeCurrentPage(this.startPage);

    window.addEventListener('load', () => loader.hideDisplay(this.loader));

    nav.onPageChange((detail) => {
      this._handlePageChange(detail);
    });
  }

  _handlePageChange(detail) {
    const { page, pageType } = detail;
    if (this.currentPage === page) return;
    this._refreshMainContent(page, pageType);
  }

  _refreshMainContent(page, pageType) {
    this.currentPage = page;
    this.main.replaceChildren();
    this.updateMainContent(page, pageType);
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

  updateMainContent(page, pageType) {
    if (pageType === nav.PAGE_TYPE.PROJECT) this._updateProjectContent(page);
    else if (pageType === nav.PAGE_TYPE.VIEW) this._updateViewContent(page);
  }
}

new App();
