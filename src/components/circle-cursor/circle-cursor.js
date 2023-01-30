/*------------------------------------------------------------------------------------------*/
/* Circle Cursor Component */
/*------------------------------------------------------------------------------------------*/

// initialize circle cursor
export function initCircleCursor() {
  const app = document.getElementById("app-inner");
  const outer = document.querySelector(".circle-cursor-outer");
  const inner = document.querySelector(".circle-cursor-inner");

  // return if disabled
  if (!outer || !inner) { return; }

  app.addEventListener("mousemove", (e) => {
    // make the circles follow the cursor
    outer.setAttribute("style", `visibility: visible; top: ${e.clientY}px; left: ${e.clientX}px;`);
    inner.setAttribute("style", `visibility: visible; top: ${e.clientY}px; left: ${e.clientX}px;`);

    // add link hover style
    if (e.target.closest("a") || e.target.closest("button") || e.target.closest(".link-hover")) {
      inner.classList.add("cursor-link-hover");
    } else {
      inner.classList.remove("cursor-link-hover");
    }
  });

  app.addEventListener("click", () => {
    // add pulse effect on click
    inner.classList.add("cursor-click-effect");
    setTimeout(() => inner.classList.remove("cursor-click-effect"), 200);
  });
}
