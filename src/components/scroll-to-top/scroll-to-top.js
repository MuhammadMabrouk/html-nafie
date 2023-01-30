/*------------------------------------------------------------------------------------------*/
/* Scroll to Top Button Component */
/*------------------------------------------------------------------------------------------*/

// scroll to top
export function scrollToTop() {
  window.scroll({ top: 0, behavior: "smooth" });
}

// back to top scroll indicator animation
export function animBackTopScrollIndicator() {
  const backTopBtn = document.querySelector(".scroll-to-top");

  if (!backTopBtn) { return; }

  const showAt = backTopBtn.dataset.showAt;
  const backTopBtnPath = backTopBtn.querySelector("path");
  const backTopBtnPathLength = backTopBtnPath.getTotalLength();

  gsap.from(backTopBtn, {
    ease: "none",
    duration: 0.3,
    autoAlpha: 0,
    y: 10,
    scrollTrigger: {
      trigger: "#app-inner",
      start: `${showAt}px top`,
      end: "bottom bottom",
      toggleActions: "play none none reverse",
    },
  });

  gsap.set(backTopBtnPath, {
    strokeDasharray: backTopBtnPathLength,
    strokeDashoffset: backTopBtnPathLength,
    scrollTrigger: {
      trigger: "#app-inner",
      start: `${showAt}px top`,
      end: "bottom bottom",
      onUpdate: (self) => backTopBtnPath.style.strokeDashoffset = backTopBtnPathLength - (self.progress * backTopBtnPathLength),
    },
  });
}
