import './scss/main.scss';

import * as sidebar from './layouts/sidebar';
import * as main from './layouts/main';

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

    this._refreshMainContent(this.startPage, nav.PAGE_TYPE.PROJECT);
    window.addEventListener('load', () => loader.hideDisplay(this.loader));

    nav.onPageChange((detail) => {
      const { page, pageType } = detail;
      this._handlePageChange(page, pageType);
    });
  }

  _handlePageChange(page, pageType) {
    if (this.currentPage === page) return;
    this._refreshMainContent(page, pageType);
  }

  _refreshMainContent(page, pageType) {
    this.currentPage = page;
    this.main.replaceChildren();
    main.populateMain(this.main, page, pageType, this.projects);
  }
}

new App();
