/*------------------------------------------------------------------------------------------*/
/* Experience Section Component */
/*------------------------------------------------------------------------------------------*/

// split experience items into chunks of 3 items
function experienceChunks(timePath, items) {
  const chunksArr = [...Array(Math.floor((items.length -1) / 3))];

  // add static first child
  timePath.insertAdjacentHTML("afterbegin", `<span class="line"></span>`);

  // add dynamic children
  chunksArr.forEach(() => {
    timePath.insertAdjacentHTML(
      "beforeend",
      `<span class="semicircle"></span><span class="line"></span>`
    );
  });
}

// experience items timeline animation
export function animExperienceItemsTimeline() {
  const timePath = document.querySelector(".experience-section .experience__timePath");
  const experienceItems = gsap.utils.toArray(".experience-section .experience__timeline__item");
  let experienceTimePathTL;
  let experienceItemsTL;
  let mainExperienceTL;

  if (timePath || experienceItems.length) {

    // add time path structure
    experienceChunks(timePath, experienceItems);

    mainExperienceTL = gsap.timeline({
      scrollTrigger: {
        trigger: ".experience-section .experience__timeline",
        start: "top 85%",
        end: "top 35%",
        scrub: 0.3,
      }
    });
  }

  if (timePath) {
    const timePathChildren = gsap.utils.toArray(".experience-section .experience__timePath span");
    experienceTimePathTL = gsap.timeline();

    const docDir = document.documentElement.dir;
    const fromDir = docDir === "rtl" ? "reverse" : "from";
    const reverseDir = docDir === "rtl" ? "from" : "reverse";
    const coords = {
      x: {
        from: "polygon(0% 0%, 0% 0%, 0% 100%, 0% 100%)",
        reverse: "polygon(100% 0%, 100% 0%, 100% 100%, 100% 100%)",
        to: "polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)",
      },
      c: {
        from: "polygon(0% 0%, 0% 0%, 0% 0%, 0% 0%, 0% 75%, 0% 75%, 0% 75%, 0% 75%)",
        reverse: "polygon(100% 0%, 100% 0%, 100% 0%, 100% 0%, 100% 75%, 100% 75%, 100% 75%, 100% 75%)",
        to: {
          from: {
            st1: "polygon(0% 0%, 100% 0%, 100% 0%, 100% 0%, 100% 0%, 75% 25%, 75% 25%, 0% 25%)",
            st2: "polygon(0% 0%, 100% 0%, 100% 100%, 100% 100%, 75% 75%, 75% 75%, 75% 25%, 0% 25%)",
            st3: "polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%, 0% 75%, 75% 75%, 75% 25%, 0% 25%)",
          },
          reverse: {
            st1: "polygon(100% 0%, 0% 0%, 0% 0%, 0% 0%, 0% 0%, 25% 25%, 25% 25%, 100% 25%)",
            st2: "polygon(100% 0%, 0% 0%, 0% 100%, 0% 100%, 25% 75%, 25% 75%, 25% 25%, 100% 25%)",
            st3: "polygon(100% 0%, 0% 0%, 0% 100%, 100% 100%, 100% 75%, 25% 75%, 25% 25%, 100% 25%)",
          },
        },
      },
    };
    const lineOdd = [...timePath.querySelectorAll(".line:nth-of-type(4n + 1)")];
    const lineEven = [...timePath.querySelectorAll(".line:nth-of-type(4n + 3)")];
    const semicircleOdd = [...timePath.querySelectorAll(".semicircle:nth-of-type(4n + 2)")];
    const semicircleEven = [...timePath.querySelectorAll(".semicircle:nth-of-type(4n + 4)")];
    experienceTimePathTL
      .set(timePathChildren, { autoAlpha: 1 })
      .set(lineOdd, { clipPath: coords.x[fromDir] })
      .set(lineEven, { clipPath: coords.x[reverseDir] })
      .set(semicircleOdd, { clipPath: coords.c[fromDir] })
      .set(semicircleEven, { clipPath: coords.c[reverseDir] });

    timePathChildren.forEach(child => {
      if (lineOdd.includes(child) || lineEven.includes(child)) {
        experienceTimePathTL.to(child, { clipPath: coords.x.to });

      } else if (semicircleOdd.includes(child)) {
        experienceTimePathTL
          .to(child, { clipPath: coords.c.to[fromDir].st1 })
          .to(child, { clipPath: coords.c.to[fromDir].st2 })
          .to(child, { clipPath: coords.c.to[fromDir].st3 });

      } else if (semicircleEven.includes(child)) {
        experienceTimePathTL
          .to(child, { clipPath: coords.c.to[reverseDir].st1 })
          .to(child, { clipPath: coords.c.to[reverseDir].st2 })
          .to(child, { clipPath: coords.c.to[reverseDir].st3 });
      }
    });

    mainExperienceTL.add(experienceTimePathTL);
  }

  if (experienceItems.length) {
    experienceItemsTL = gsap.timeline();

    experienceItems.forEach(el => {
      experienceItemsTL.from(el, { autoAlpha: 0 }).from(el, { scale: 0.2, }, "<");
    });

    mainExperienceTL.add(experienceItemsTL, "< +=0.5");
  }
}
