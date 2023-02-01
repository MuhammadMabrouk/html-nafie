import { animBackTopScrollIndicator } from "./components/scroll-to-top.js";
import { animStatisticsItems } from "./components/stats-section.js";
import { animAboutImage } from "./components/about-section.js";
import { animSkillsItems } from "./components/skills-section.js";
import { animExperienceItemsTimeline } from "./components/experience-section.js";
import { animTestimonialsSectionTitle, animTestimonialsItems } from "./components/testimonials-section.js";
import { animContactInfo, animContactForm } from "./components/contact-section.js";

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
  animTestimonialsSectionTitle();

  /* testimonials items */
  animTestimonialsItems();

  /* contact info */
  animContactInfo();

  /* contact form */
  animContactForm();
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
