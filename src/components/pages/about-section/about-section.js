/*------------------------------------------------------------------------------------------*/
/* About Section Component */
/*------------------------------------------------------------------------------------------*/

// about image animation
export function animAboutImage() {
  const aboutSection = document.querySelector(".about-section");

  if (!aboutSection) { return; }

  gsap
    .timeline({
      scrollTrigger: {
        trigger: ".about-section .about__imgWrapper",
        start: "top 80%",
        end: "top 50%",
        scrub: 0.3,
      },
    })
    .from(".about-section .about__imgWrapper", { autoAlpha: 0, scale: 0.5 });
}
