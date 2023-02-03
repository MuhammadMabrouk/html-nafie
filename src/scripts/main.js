import { animPreloaderScreen } from "./components/preloader.js";
import { initAnimation } from "./animations.js";
import { initCircleCursor } from "./components/circle-cursor.js";
import { headerScrollEffects } from "./components/the-header.js";
import { getAppMode, toggleAppMode } from "./components/mode-switcher.js";
import { offCanvasMenuToggle, offCanvasMenuClose, offCanvasMenuTabTrap } from "./components/navbar.js";
import { scrollToTop } from "./components/scroll-to-top.js";
import { initSimpleTooltips, initUltimateTooltips } from "./components/tooltip.js";
import { initHeroImgPanEffect } from "./components/hero-section.js";
import { switchSkillsItemsGroups } from "./components/skills-section.js";
import { initializePortfolioTilt, filterPortfolioItems, loadMorePortfolioItems, init_DEMO_portfolio_items } from "./components/portfolio-section.js";
import { contactFormValidation } from "./components/contact-section.js";

document.addEventListener("DOMContentLoaded", () => {

  /* preloader screen animation */
  animPreloaderScreen();

  if (window.innerWidth >= 992) {
    // initialize circle cursor
    initCircleCursor();

    // initialize hero image pan effect
    initHeroImgPanEffect();

    // initialize VanillaTilt library in portfolio section
    initializePortfolioTilt();
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

  // initialize glightbox plugin
  const lightbox = new GLightbox({ autoplayVideos: false });

  // initialize simple tooltip elements
  initSimpleTooltips();

  // initialize ultimate tooltip elements and popper.js plugin
  initUltimateTooltips();

  // initialize stagger delay elements
  addStaggerDelay();

  // switch between skills item groups
  switchSkillsItemsGroups();

  // filter portfolio items
  window._filterPortfolioItems = filterPortfolioItems;

  // load more portfolio items
  window._loadMorePortfolioItems = loadMorePortfolioItems;

  // initialize **DEMO** portfolio items (this function can be safely removed, it's for demonstration)
  init_DEMO_portfolio_items();

  // contact form validation
  window._contactFormValidation = contactFormValidation;
});

window.addEventListener("load", () => {

  // initialize animation effects
  initAnimation();
});

window.addEventListener("scroll", () => {

  // header scroll effects
  headerScrollEffects();
});

// add stagger delay to children elements
function addStaggerDelay() {
  const staggerDelayEls = document.querySelectorAll("[data-stagger-delay]");

  staggerDelayEls.forEach(el => {
    const value = JSON.parse(el.dataset.staggerDelay);

    [...el.children].forEach((child, i) => {
      child.style.setProperty("animation-delay", `${(i + 1) * (value || 100)}ms`);
    });
  });
}
