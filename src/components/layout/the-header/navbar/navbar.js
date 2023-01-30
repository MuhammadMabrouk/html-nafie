/*------------------------------------------------------------------------------------------*/
/* Navbar Component */
/*------------------------------------------------------------------------------------------*/

const navbar = document.querySelector(".header .navbar");
const hamburgerBtn = document.querySelector(".header .hamburgerBtn");

// toggle off-canvas menu
export function offCanvasMenuToggle() {
  navbar.classList.contains("menu-open") ? offCanvasMenuClose() : offCanvasMenuOpen();
}

// open off-canvas menu
function offCanvasMenuOpen() {
  navbar.classList.add("menu-open");
  hamburgerBtn.classList.add("open");

  // prevent page scroll
  document.body.style.setProperty("overflow-y", "hidden");

  // set focus on off-canvas menu
  navbar.querySelector(".offCanvasMenu").focus();
}

// close off-canvas menu
export function offCanvasMenuClose() {
  navbar.classList.remove("menu-open");
  hamburgerBtn.classList.remove("open");

  // allow page scroll
  document.body.style.removeProperty("overflow-y");

  // set focus on hamburger button
  hamburgerBtn.focus();
}

// off-canvas menu tab trap
export function offCanvasMenuTabTrap() {
  const focusableElsString = 'a[href], input:not([disabled]), select:not([disabled]), textarea:not([disabled]), button:not([disabled]), [tabindex="0"]';
  let firstTabStop;
  let lastTabStop;
  let isFirstTabStop;
  let isLastTabStop;

  document.addEventListener("keyup", (e) => {
    if (navbar.classList.contains("menu-open")) {
      // get first & last focusable elements in the menu for tab trap
      const focusableElsArr = [...navbar.querySelectorAll(focusableElsString)];
      const visibleFocusableEls = focusableElsArr.filter(el => window.getComputedStyle(el).getPropertyValue("visibility") !== "hidden");
      firstTabStop = visibleFocusableEls[0];
      lastTabStop = visibleFocusableEls[visibleFocusableEls.length - 1];

      if (e.code === "Tab") {
        if (e.shiftKey) {
          /* shift + tab */ // if this is the first item, move to the last item
          isFirstTabStop && lastTabStop.focus();
        } /* tab */ else {
          // if this is the last item, go back to the first item
          isLastTabStop && firstTabStop.focus();
        }

        // close the menu on Escape button press
      } else if (e.code === "Escape") {
        offCanvasMenuToggle();
      }

      // get current active element
      const activeEl = document.activeElement;

      // check if last item or not
      isLastTabStop = activeEl === lastTabStop ? true : false;

      // check if first item or not
      isFirstTabStop = activeEl === firstTabStop ? true : false;
    }
  });
}
