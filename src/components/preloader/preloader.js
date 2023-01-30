/*------------------------------------------------------------------------------------------*/
/* Preloader Component */
/*------------------------------------------------------------------------------------------*/

// preloader screen animation
export function animPreloaderScreen() {
  let count = 0;
  const preloader = document.querySelector(".preloader");

  if (!preloader) { return; }

  const preloaderContent = preloader.querySelector(".preloader__content");
  const imgs = [...document.images];
  const imgsLength = imgs.length;
  const hidePreloader = () => {
    preloader.setAttribute("style", "--loading-percentage: 100%");
    gsap.timeline()
      .set(".hide-in-preloading", { autoAlpha: 1 })
      .to(preloaderContent, { delay: 0.5, autoAlpha: 0 })
      .to(preloader, { y: "-100%", duration: 1, ease: "expo.in" }, "-=0.5")
      .set(preloader, { autoAlpha: 0 });
  }
  const imgLoaded = () => {
    count++;

    const loadingPercentage = ((100 / imgsLength) * count) << 0;
    preloader.setAttribute("style", `--loading-percentage: ${loadingPercentage}%`);

    if (count === imgsLength) { hidePreloader(); }
  }

  if (imgsLength) {

    // setup preloader indicator
    imgs.forEach(img => {
      const tImg = new Image();

      tImg.onload = imgLoaded;
      tImg.onerror = imgLoaded;
      tImg.src = img.src;
    });

  } else { hidePreloader(); }
}
