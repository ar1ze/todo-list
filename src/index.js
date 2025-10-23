import './scss/main.scss';

import { populateSidebar } from './layouts/sidebar';
import { createLoadingScreen, hideLoadingScreen } from './utils/loading';

const loader = createLoadingScreen();

populateSidebar();

window.addEventListener('load', () => hideLoadingScreen(loader));
