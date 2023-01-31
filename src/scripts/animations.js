import { animBackTopScrollIndicator } from "./components/scroll-to-top.js";
import { animStatisticsItems } from "./components/stats-section.js";
import { animAboutImage } from "./components/about-section.js";

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
  // animSkillsItems();

  /* experience items timeline */
  // animExperienceItemsTimeline();

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

// skills items
// function animSkillsItems() {
//   const skillsGroups = gsap.utils.toArray(".skills-section .skills-items ul");

//   if (!skillsGroups.length) { return; }

//   skillsGroups.forEach(group => {
//     const skillsItemsTL = gsap.timeline({
//       scrollTrigger: {
//         trigger: ".skills-section .skills-items",
//         start: "top 85%",
//         end: "top 35%",
//         scrub: 0.3,
//       }
//     });

//     group.querySelectorAll("li").forEach((el, i) => {
//       const pos = i === 0 ? "" : "< +=0.2";
//       skillsItemsTL.from(el, { autoAlpha: 0 }, pos).from(el, { y: 50, }, "<");
//     });
//   });
// }

// experience items timeline
// function animExperienceItemsTimeline() {
//   const experienceTimepath = this.$refs.experienceTimepath;
//   const experienceItems = gsap.utils.toArray(".experience-timeline .timeline-items li");
//   let experienceTimepathTL;
//   let experienceItemsTL;
//   let mainExperienceTL;

//   if (experienceTimepath || experienceItems.length) {
//     mainExperienceTL = gsap.timeline({
//       scrollTrigger: {
//         trigger: ".experience-section .experience-timeline",
//         start: "top 85%",
//         end: "top 35%",
//         scrub: 0.3,
//       }
//     });
//   }

//   if (experienceTimepath) {
//     const experienceTimepathItems = gsap.utils.toArray(".experience-timeline .timepath span");
//     experienceTimepathTL = gsap.timeline();

//     const docDir = document.documentElement.dir;
//     const fromDir = docDir === "rtl" ? "reverse" : "from";
//     const reverseDir = docDir === "rtl" ? "from" : "reverse";
//     const coords = {
//       x: {
//         from: "polygon(0% 0%, 0% 0%, 0% 100%, 0% 100%)",
//         reverse: "polygon(100% 0%, 100% 0%, 100% 100%, 100% 100%)",
//         to: "polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)",
//       },
//       c: {
//         from: "polygon(0% 0%, 0% 0%, 0% 0%, 0% 0%, 0% 75%, 0% 75%, 0% 75%, 0% 75%)",
//         reverse: "polygon(100% 0%, 100% 0%, 100% 0%, 100% 0%, 100% 75%, 100% 75%, 100% 75%, 100% 75%)",
//         to: {
//           from: {
//             st1: "polygon(0% 0%, 100% 0%, 100% 0%, 100% 0%, 100% 0%, 75% 25%, 75% 25%, 0% 25%)",
//             st2: "polygon(0% 0%, 100% 0%, 100% 100%, 100% 100%, 75% 75%, 75% 75%, 75% 25%, 0% 25%)",
//             st3: "polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%, 0% 75%, 75% 75%, 75% 25%, 0% 25%)",
//           },
//           reverse: {
//             st1: "polygon(100% 0%, 0% 0%, 0% 0%, 0% 0%, 0% 0%, 25% 25%, 25% 25%, 100% 25%)",
//             st2: "polygon(100% 0%, 0% 0%, 0% 100%, 0% 100%, 25% 75%, 25% 75%, 25% 25%, 100% 25%)",
//             st3: "polygon(100% 0%, 0% 0%, 0% 100%, 100% 100%, 100% 75%, 25% 75%, 25% 25%, 100% 25%)",
//           },
//         },
//       },
//     };
//     const lineOdd = [...experienceTimepath.querySelectorAll(".line:nth-of-type(4n + 1)")];
//     const lineEven = [...experienceTimepath.querySelectorAll(".line:nth-of-type(4n + 3)")];
//     const semicircleOdd = [...experienceTimepath.querySelectorAll(".semicircle:nth-of-type(4n + 2)")];
//     const semicircleEven = [...experienceTimepath.querySelectorAll(".semicircle:nth-of-type(4n + 4)")];
//     experienceTimepathTL
//       .set(experienceTimepathItems, { autoAlpha: 1 })
//       .set(lineOdd, { clipPath: coords.x[fromDir] })
//       .set(lineEven, { clipPath: coords.x[reverseDir] })
//       .set(semicircleOdd, { clipPath: coords.c[fromDir] })
//       .set(semicircleEven, { clipPath: coords.c[reverseDir] });

//     experienceTimepathItems.forEach(el => {
//       if (lineOdd.includes(el) || lineEven.includes(el)) {
//         experienceTimepathTL.to(el, { clipPath: coords.x.to });

//       } else if (semicircleOdd.includes(el)) {
//         experienceTimepathTL
//           .to(el, { clipPath: coords.c.to[fromDir].st1 })
//           .to(el, { clipPath: coords.c.to[fromDir].st2 })
//           .to(el, { clipPath: coords.c.to[fromDir].st3 });

//       } else if (semicircleEven.includes(el)) {
//         experienceTimepathTL
//           .to(el, { clipPath: coords.c.to[reverseDir].st1 })
//           .to(el, { clipPath: coords.c.to[reverseDir].st2 })
//           .to(el, { clipPath: coords.c.to[reverseDir].st3 });
//       }
//     });

//     mainExperienceTL.add(experienceTimepathTL);
//   }

//   if (experienceItems.length) {
//     experienceItemsTL = gsap.timeline();

//     experienceItems.forEach(el => {
//       experienceItemsTL.from(el, { autoAlpha: 0 }).from(el, { scale: 0.2, }, "<");
//     });

//     mainExperienceTL.add(experienceItemsTL, "< +=0.5");
//   }
// }

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
