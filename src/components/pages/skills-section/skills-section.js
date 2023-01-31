/*------------------------------------------------------------------------------------------*/
/* Skills Section Component */
/*------------------------------------------------------------------------------------------*/

// switch between skills item groups
export function switchSkillsItemsGroups() {
  const itemsTypeInputs = document.querySelectorAll('.skills-section .skills__text__switcher input[name="items_type"]');
  const itemGroups = document.querySelectorAll(".skills-section .skills__wrapper .skills__items");

  itemsTypeInputs.forEach(input => {
    input.addEventListener("change", (e) => {
      itemGroups.forEach(group => {
        if (group.dataset.type === e.target.value) {
          group.style.removeProperty("display");
        } else {
          group.style.setProperty("display", "none");
        }
      });
    });
  });
}

// skills items animation
export function animSkillsItems() {
  const skillsGroups = gsap.utils.toArray(".skills-section .skills__items");

  if (!skillsGroups.length) { return; }

  skillsGroups.forEach(group => {
    const skillsItemsTL = gsap.timeline({
      scrollTrigger: {
        trigger: ".skills-section .skills__wrapper",
        start: "top 85%",
        end: "top 35%",
        scrub: 0.3,
      },
    });

    group.querySelectorAll("li").forEach((el, i) => {
      const pos = i === 0 ? "" : "< +=0.2";
      skillsItemsTL.from(el, { autoAlpha: 0 }, pos).from(el, { y: 50 }, "<");
    });
  });
}
