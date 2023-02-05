/*------------------------------------------------------------------------------------------*/
/* Header Component */
/*------------------------------------------------------------------------------------------*/

let lastScrollPosition = 0;
let startMinimizingHeaderAt = 100;

// header scroll effects
export function headerScrollEffects() {
  const header = document.querySelector(".header");

  // return if disabled
  if (!header) { return; }

  const scrollPosition = window.pageYOffset;
  let isHeaderExpanded = !(scrollPosition >= startMinimizingHeaderAt);
  let isHeaderMinimized = scrollPosition > startMinimizingHeaderAt && scrollPosition > lastScrollPosition;

  // check for current scroll position to minimize the header
  if (isHeaderExpanded) {
    header.classList.add("header--expanded");
  } else {
    header.classList.remove("header--expanded");
  }

  if (!isHeaderExpanded) {
    header.classList.add("header--semi-minimized");
  } else {
    header.classList.remove("header--semi-minimized");
  }

  if (isHeaderMinimized) {
    header.classList.add("header--minimized");
  } else {
    header.classList.remove("header--minimized");
  }

  lastScrollPosition = scrollPosition;
}
