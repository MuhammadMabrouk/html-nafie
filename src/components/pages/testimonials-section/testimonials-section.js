/*------------------------------------------------------------------------------------------*/
/* Testimonials Section Component */
/*------------------------------------------------------------------------------------------*/

const testimonialsSection = document.getElementById("testimonials");

// testimonials section title animation
export function animTestimonialsSectionTitle() {
  if (!testimonialsSection) { return; }

  gsap.timeline({
    scrollTrigger: {
      trigger: ".testimonials-section .section-title",
      start: "top 90%",
      end: "top 40%",
      scrub: 0.3,
    }
  })
    .from(".testimonials-section .section-title .subtitle", { autoAlpha: 0, top: 50 })
    .from(".testimonials-section .section-title .title", { autoAlpha: 0, y: 50 }, "< +=0.2");
}

// testimonials items animation
export function animTestimonialsItems() {
  if (!testimonialsSection) { return; }

  const testimonialsItems = gsap.utils.toArray(".testimonials-section .testimonials__item");
  const testimonialsItemsTL = gsap.timeline({
    scrollTrigger: {
      trigger: ".testimonials-section .testimonials__items",
      start: "top 75%",
      end: "top 25%",
      scrub: 0.3,
    }
  });

  testimonialsItems.forEach((el, i) => {
    const pos = i === 0 ? "" : "< +=0.2";
    testimonialsItemsTL.from(el, { autoAlpha: 0 }, pos).from(el, { scale: 0.2, }, "<");
  });
}
