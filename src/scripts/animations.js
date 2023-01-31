import { animBackTopScrollIndicator } from "./components/scroll-to-top.js";
import { animStatisticsItems } from "./components/stats-section.js";
import { animAboutImage } from "./components/about-section.js";
import { animSkillsItems } from "./components/skills-section.js";
import { animExperienceItemsTimeline } from "./components/experience-section.js";

// initialize animation effects
export function initAnimation() {
  gsap.registerPlugin(ScrollTrigger);

  /* back to top scroll indicator */
  animBackTopScrollIndicator();

  /* statistics items */
  animStatisticsItems();

  /* section text box */
  animSectionTextBox();

  /* about image */
  animAboutImage();

  /* skills items */
  animSkillsItems();

  /* experience items timeline */
  animExperienceItemsTimeline();

  /* testimonials section title */
  // animTestimonialsSectionTitle();

  /* testimonials items */
  // animTestimonialsItems();

  /* contact info */
  // animContactInfo();

  /* contact form */
  // animContactForm();
}

// section text box
function animSectionTextBox() {
  const textBoxes = gsap.utils.toArray(".text-box-inline");

  if (!textBoxes.length) { return; }

  textBoxes.forEach(box => {
    gsap.timeline({
      scrollTrigger: {
        trigger: box,
        start: "top 85%",
        end: "top 35%",
        scrub: 0.3,
      }
    })
      .from(box.querySelector(".subtitle"), { autoAlpha: 0, top: 50 })
      .from(box.querySelector("h2"), { autoAlpha: 0, y: 50 }, "-=0.2")
      .from(box.querySelectorAll("h2 ~ *"), { autoAlpha: 0, y: 50, stagger: 0.2 }, "-=0.2");
  });
}

// testimonials section title
// function animTestimonialsSectionTitle() {
//   if (!this.$refs.testimonialsSection) { return; }

//   gsap.timeline({
//     scrollTrigger: {
//       trigger: ".testimonials-section .section-title",
//       start: "top 90%",
//       end: "top 40%",
//       scrub: 0.3,
//     }
//   })
//     .from(".testimonials-section .section-title .subtitle", { autoAlpha: 0, top: 50 })
//     .from(".testimonials-section .section-title .title", { autoAlpha: 0, y: 50 }, "< +=0.2");
// }

// testimonials items
// function animTestimonialsItems() {
//   if (!this.$refs.testimonialsSection) { return; }

//   const testimonialsItems = gsap.utils.toArray(".testimonials-section .testimonials-item");
//   const testimonialsItemsTL = gsap.timeline({
//     scrollTrigger: {
//       trigger: ".testimonials-section .testimonials-items",
//       start: "top 75%",
//       end: "top 25%",
//       scrub: 0.3,
//     }
//   });

//   testimonialsItems.forEach((el, i) => {
//     const pos = i === 0 ? "" : "< +=0.2";
//     testimonialsItemsTL.from(el, { autoAlpha: 0 }, pos).from(el, { scale: 0.2, }, "<");
//   });
// }

// contact info
// function animContactInfo() {
//   const contactInfoItems = gsap.utils.toArray(".contact-section .contact-info li");

//   if (!contactInfoItems.length) { return; }

//   const contactInfoTL = gsap.timeline({
//     scrollTrigger: {
//       trigger: ".contact-section .contact-info",
//       start: "top 80%",
//       end: "top 50%",
//       scrub: 0.3,
//     }
//   });

//   contactInfoItems.forEach((el, i) => {
//     const pos = i === 0 ? "" : "< +=0.2";
//     contactInfoTL.from(el, { autoAlpha: 0 },pos).from(el, { y: 50, }, "<");
//   });

//   // social icons animation
//   contactInfoTL
//     .from(".contact-section .contact-text .social li", { autoAlpha: 0 })
//     .from(".contact-section .contact-text .social li", { y: 50, stagger: 0.2 }, "<");
// }

// contact form
// function animContactForm() {
//   if (!this.$refs.contactForm) { return; }

//   gsap.timeline({
//     scrollTrigger: {
//       trigger: ".contact-section .contact-form",
//       start: "top 80%",
//       end: "top 50%",
//       scrub: 0.3,
//     }
//   })
//     .from(".contact-section .contact-form", { autoAlpha: 0, scale: 0.7 });
// }
