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
