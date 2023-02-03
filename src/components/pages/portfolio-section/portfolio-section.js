import { startAjaxLoading, stopAjaxLoading } from "./ajax-loader.js";
import { addNotification, dismissNotification } from "./notifications.js";
/*------------------------------------------------------------------------------------------*/
/* Portfolio Section Component */
/*------------------------------------------------------------------------------------------*/

const portfolioItems = document.querySelector(".portfolio-section .portfolio__items");
const portfolioItemEls = portfolioItems?.querySelectorAll(".portfolio__item");
const itemsPerPage = 7;

// initialize VanillaTilt library in portfolio section
export function initializePortfolioTilt() {

  // return if disabled
  if (!portfolioItems) { return; }

  VanillaTilt.init(portfolioItems.querySelectorAll(".portfolio__item"), {
    max: 8,
    speed: 400,
    glare: true,
    "max-glare": 0.3,
  });
}

// filter portfolio items
export function filterPortfolioItems(btn) {
  const filterBtns = portfolioItems.querySelectorAll(".portfolio__filters__btn");
  const filterVal = btn.textContent.toLowerCase();

  // toggle active class
  filterBtns.forEach(el => el === btn ? el.classList.add("active") : el.classList.remove("active"));

  // filter items
  const visibleItems = portfolioItems.querySelectorAll(".portfolio__item:not([hidden])");
  [...visibleItems].filter(item => {

    // hide all items
    item.style.setProperty("display", "none");

    // show only selected items
    if (item.dataset.filter === filterVal || filterVal === "all") {
      setTimeout(() => item.style.removeProperty("display"));
    }
  });

  // fix portfolio layout after filtering
  fixPortfolioLayout();
}

// load more portfolio items
export function loadMorePortfolioItems(btn) {
  const noWorksMsg = btn.dataset.noWorksMsg;

  // start loading spinner
  startAjaxLoading();

  // load more items (make your HTTP request here)
  const hiddenItems = portfolioItems.querySelectorAll(".portfolio__item[hidden]");
  if (hiddenItems.length) {
    [...hiddenItems].slice(0, itemsPerPage).forEach(item => item.removeAttribute("hidden"));

    // fix portfolio layout after loading
    fixPortfolioLayout();
  } else {

    // show error message
    addNotification({ type: "danger", msg: noWorksMsg, autoHide: true });
  }

  // stop loading spinner
  stopAjaxLoading();
}

// fix portfolio layout after add new items
function fixPortfolioLayout() {
  // reinitialize VanillaTilt for new items
  initializePortfolioTilt();

  // Forces the ScrollTrigger instance to re-calculate its start and end values
  setTimeout(() => ScrollTrigger.refresh(), 500);
}

// initialize **DEMO** portfolio items (this function can be safely removed, it's for demonstration)
export function init_DEMO_portfolio_items() {

  // return if disabled
  if (!portfolioItems) { return; }

  // show the first page items and hide the rest
  [...portfolioItemEls].slice(itemsPerPage).forEach(item => {
    item.setAttribute("hidden", "");
  });
}
