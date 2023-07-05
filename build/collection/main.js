// CORE
import "./router.js";
import "./events.js";

// CSS
import "./css/reference.scss";
import "./css/core.scss";
import "./css/normalize.scss";

// CUSTOM ELEMENTS
import "./elements/layout/layout.js";
import "./elements/layout/layout-list/layout-list.js";
import "./elements/layout/layout-page/layout-page.js";
import "./elements/logo/logo.js";

// COMPONENTS
import { defineCustomElements } from "../dist/components/loader/index.js";
defineCustomElements();

// ASSETS
require.context("./resources", false);
