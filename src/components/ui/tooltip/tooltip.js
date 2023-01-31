/*------------------------------------------------------------------------------------------*/
/* Tooltip Component */
/*------------------------------------------------------------------------------------------*/

// initialize simple tooltip elements
export function initSimpleTooltips() {
  const tooltipEls = document.querySelectorAll("[data-tooltip]");

  tooltipEls.forEach(el => {
    const options = JSON.parse(el.dataset.tooltip);

    el.classList.add("has-tooltip");
    el.insertAdjacentHTML(
      "beforeend",
      `<div class="simple-tooltip tooltip-${options.dir}">${options.text}</div>`
    );
  });
}

// initialize ultimate tooltip elements and popper.js plugin
export function initUltimateTooltips() {
  document.querySelectorAll(".has-ultimate-tooltip").forEach(el => {
    Popper.createPopper(el, el.querySelector(".ultimate-tooltip"), {
      placement: "top",
      modifiers: [{ name: "offset", options: { offset: [0, 30] } }],
    });
  });
}
