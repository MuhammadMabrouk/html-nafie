import { animPreloaderScreen } from "./components/preloader.js";
import { initAnimation } from "./animations.js";
import { initCircleCursor } from "./components/circle-cursor.js";
import { headerScrollEffects } from "./components/the-header.js";
import { getAppMode, toggleAppMode } from "./components/mode-switcher.js";
import { offCanvasMenuToggle, offCanvasMenuClose, offCanvasMenuTabTrap } from "./components/navbar.js";
import { scrollToTop } from "./components/scroll-to-top.js";

document.addEventListener("DOMContentLoaded", () => {

  /* preloader screen animation */
  animPreloaderScreen();

  if (window.innerWidth >= 992) {
    // initialize circle cursor
    initCircleCursor();
  }

  // manage elements focus style
  (() => {
    const appInner = document.getElementById("app-inner");
    const classes = appInner.classList;

    appInner.addEventListener("click", () => classes.remove("enable-focus-style"));
    appInner.addEventListener("keyup", (e) => e.key === "Tab" && classes.add("enable-focus-style"));
  })();

  // header scroll effects
  headerScrollEffects();

  // get the app mode
  getAppMode();

  // toggle the app mode
  window._toggleAppMode = toggleAppMode;

  // toggle off-canvas menu
  window._offCanvasMenuToggle = offCanvasMenuToggle;

  // close off-canvas menu
  window._offCanvasMenuClose = offCanvasMenuClose;

  // off-canvas menu tab trap
  offCanvasMenuTabTrap();

  // scroll to top
  window._scrollToTop = scrollToTop;
});

window.addEventListener("load", () => {

  // initialize animation effects
  initAnimation();
});

window.addEventListener("scroll", () => {

  // header scroll effects
  headerScrollEffects();
});
