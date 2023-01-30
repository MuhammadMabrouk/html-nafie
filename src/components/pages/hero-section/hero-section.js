/*------------------------------------------------------------------------------------------*/
/* Hero Section Component */
/*------------------------------------------------------------------------------------------*/

export function initHeroImgPanEffect() {
  const heroSection = document.getElementById("hero");

  // return if disabled
  if (!heroSection || !heroSection.dataset.hasOwnProperty("panEffect")) { return; }

  const imgLayers = heroSection.querySelectorAll(".hero__imgLayer");

  // apply pan effect on mousemove
  heroSection.addEventListener("mousemove", (e) => {
    const x = ((e.x - heroSection.getBoundingClientRect().x) / heroSection.offsetWidth) * 100;
    const y = ((e.y - heroSection.getBoundingClientRect().y) / heroSection.offsetHeight) * 100;

    imgLayers[0].setAttribute("style", `transform-origin: ${x}vw ${y}vh;`);
    imgLayers[1].setAttribute("style", `transform-origin: ${x}vw ${y}vh;`);
  });
}
