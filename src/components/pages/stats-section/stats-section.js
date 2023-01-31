/*------------------------------------------------------------------------------------------*/
/* Statistics Section Component */
/*------------------------------------------------------------------------------------------*/

// statistics items animation
export function animStatisticsItems() {
  const statsItems = gsap.utils.toArray(".stats-section .stats__item");

  if (!statsItems.length) { return; }

  const statsItemsTL = gsap.timeline({
    scrollTrigger: {
      trigger: ".stats__items",
      start: "top 82%",
      end: "top 50%",
      scrub: 0.3,
    }
  });

  statsItems.forEach((el, i) => {
    const pos = i === 0 ? "" : "< +=0.2";
    statsItemsTL.from(el, { autoAlpha: 0 }, pos).from(el, { y: 50, }, "<");
  });
}
