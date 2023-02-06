/*------------------------------------------------------------------------------------------*/
/* Mode Switcher Component */
/*------------------------------------------------------------------------------------------*/

const modeSwitcher = document.querySelector(".modeSwitcherBtn");

// get the app mode
export function getAppMode() {
  // get saved mode from localStorage
  const savedMode = localStorage.getItem("nafieSavedMode");

  // Check if there a saved mode
  if (savedMode) {
    setAppMode(savedMode);
  } else {
    // So, try to get the browser default mode or make your own default

    // Check if Media-Queries are supported
    if (window.matchMedia) {
      // Check if the dark-mode Media-Query matches
      if (window.matchMedia("(prefers-color-scheme: dark)").matches) {
        setAppMode("dark");
      } else {
        setAppMode("light");
      }
    } else {
      // Default (when Media-Queries are not supported)
      setAppMode();
    }
  }
}

// set the app mode
function setAppMode(mode = "light") {

  // use the mode
  document.documentElement.dataset.mode = mode;
  modeSwitcher && (modeSwitcher.dataset.mode = mode);

  // save the mode in localStorage
  localStorage.setItem("nafieSavedMode", mode);
}

// toggle the app mode
export function toggleAppMode() {

  // return if disabled
  if (!modeSwitcher) { return; }

  const mode = modeSwitcher.dataset.mode === "light" ? "dark" : "light";
  setAppMode(mode);
}
