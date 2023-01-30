/*------------------------------------------------------------------------------------------*/
/* AJAX Loader Indicator Component */
/*------------------------------------------------------------------------------------------*/

// manage ajax loader status
const ajaxLoaderEl = document.querySelector(".ajaxLoader");
const ajaxLoaderHandler = {
  set(target, prop, value) {
    target[prop] = value;

    // check if ajax is loading
    isAjaxLoading();

    return true;
  },
  deleteProperty(target, prop) {
    delete target[prop];

    // check if ajax is loading
    isAjaxLoading();

    return true;
  },
};
const ajaxLoaderStatus = new Proxy([], ajaxLoaderHandler);

// start ajax loading
export function startAjaxLoading() {
  ajaxLoaderStatus.push(true);
}

// stop ajax loading
export function stopAjaxLoading() {
  ajaxLoaderStatus.pop();
}

// check if ajax is loading
function isAjaxLoading() {
  ajaxLoaderEl.style.display = ajaxLoaderStatus.some(s => s === true) ? "block" : "none";
}
