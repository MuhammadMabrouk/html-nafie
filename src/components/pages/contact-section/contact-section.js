import { startAjaxLoading, stopAjaxLoading } from "./ajax-loader.js";
import { addNotification, dismissNotification } from "./notifications.js";
/*------------------------------------------------------------------------------------------*/
/* Contact Section Component */
/*------------------------------------------------------------------------------------------*/

// contact form validation
export function contactFormValidation() {

  // contact form
  const contactForm = document.querySelector(".contact-section .contact__form");

  // form controls
  const name    = contactForm.querySelector('input[name="name"]');
  const email   = contactForm.querySelector('input[name="email"]');
  const phone   = contactForm.querySelector('input[name="phone"]');
  const message = contactForm.querySelector('textarea[name="message"]');

  // form validation status
  let errors = {
    name: { required: true, minLength: true },
    email: { required: true, invalid: true },
    phone: { invalid: true },
    message: { required: true }
  };

  /* --------------- */
  /* name validation */
  /* --------------- */

  // required validation
  if (name.value === "") {
    errors.name.required = true;
    addNotification({
      id: "nameRequired",
      type: "danger",
      msg: name.closest(".control").querySelector(".errors-msgs .required").value,
    });

  } else {
    errors.name.required = false;
    dismissNotification("nameRequired");
  }

  // minlength validation
  if (name.value.length > 0 && name.value.length < name.getAttribute("minlength")) {
    errors.name.minLength = true;
    addNotification({
      id: "nameMinLength",
      type: "danger",
      msg: name.closest(".control").querySelector(".errors-msgs .minLength").value,
    });

  } else {
    errors.name.minLength = false;
    dismissNotification("nameMinLength");
  }

  // toggle invalid errors & style classes
  if (Object.keys(errors.name).some(err => errors.name[err] === true)) {
    name.classList.remove("valid");
    name.classList.add("invalid");
  } else {
    name.classList.remove("invalid");
    name.classList.add("valid");
  }

  /* ---------------- */
  /* email validation */
  /* ---------------- */

  // required validation
  if (email.value === "") {
    errors.email.required = true;
    addNotification({
      id: "emailRequired",
      type: "danger",
      msg: email.closest(".control").querySelector(".errors-msgs .required").value,
    });

  } else {
    errors.email.required = false;
    dismissNotification("emailRequired");
  }

  // email validation
  if (email.value.length > 0 && !/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/.test(email.value)) {
    errors.email.invalid = true;
    addNotification({
      id: "emailInvalid",
      type: "danger",
      msg: email.closest(".control").querySelector(".errors-msgs .invalid").value,
    });

  } else {
    errors.email.invalid = false;
    dismissNotification("emailInvalid");
  }

  // toggle invalid errors & style classes
  if (Object.keys(errors.email).some(err => errors.email[err] === true)) {
    email.classList.remove("valid");
    email.classList.add("invalid");
  } else {
    email.classList.remove("invalid");
    email.classList.add("valid");
  }

  /* ---------------- */
  /* phone validation */
  /* ---------------- */

  // phone validation
  if (phone.value.length > 0 && !/^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$/im.test(phone.value)) {
    errors.phone.invalid = true;
    addNotification({
      id: "phoneInvalid",
      type: "danger",
      msg: phone.closest(".control").querySelector(".errors-msgs .invalid").value,
    });

  } else {
    errors.phone.invalid = false;
    dismissNotification("phoneInvalid");
  }

  // toggle invalid errors & style classes
  if (Object.keys(errors.phone).some(err => errors.phone[err] === true)) {
    phone.classList.remove("valid");
    phone.classList.add("invalid");
  } else {
    phone.classList.remove("invalid");
    phone.classList.add("valid");
  }

  /* ------------------ */
  /* message validation */
  /* ------------------ */

  // required validation
  if (message.value === "") {
    errors.message.required = true;
    addNotification({
      id: "messageRequired",
      type: "danger",
      msg: message.closest(".control").querySelector(".errors-msgs .required").value,
    });

  } else {
    errors.message.required = false;
    dismissNotification("messageRequired");
  }

  // toggle invalid errors & style classes
  if (Object.keys(errors.message).some(err => errors.message[err] === true)) {
    message.classList.remove("valid");
    message.classList.add("invalid");
  } else {
    message.classList.remove("invalid");
    message.classList.add("valid");
  }

  // send the message if the form is valid
  (!Object.values(errors).some(control => Object.values(control).some(Boolean))) && sendContactFormMessage(contactForm);
}

// send message from contact form
export function sendContactFormMessage(form) {
  const url = form.dataset.url;
  const formData = new FormData(form);

  // start loading spinner
  startAjaxLoading();

  // send post request
  fetch(url, { method: "POST", body: formData })
    .then(res => res.text())
    .then(data => {
      if (data === "success") {

        // show success message
        addNotification({ type: "success", msg: form.dataset.successMsg });

        // reset all form inputs
        form.reset();

        // remove inputs valid classes
        form.querySelectorAll(".valid").forEach(el => el.classList.remove("valid"));

      } else if (data === "error") {

        // show error message
        addNotification({ type: "danger", msg: form.dataset.errMsg });
      }

      // stop loading spinner
      stopAjaxLoading();

      console.log(data);
    })
    .catch(err => console.log(err));
}

// contact info animation
export function animContactInfo() {
  const contactInfoItems = gsap.utils.toArray(".contact-section .contact__info__item");

  if (!contactInfoItems.length) { return; }

  const contactInfoTL = gsap.timeline({
    scrollTrigger: {
      trigger: ".contact-section .contact__info",
      start: "top 80%",
      end: "top 55%",
      scrub: 0.3,
    }
  });

  contactInfoItems.forEach((el, i) => {
    const pos = i === 0 ? "" : "< +=0.2";
    contactInfoTL.from(el, { autoAlpha: 0 },pos).from(el, { y: 50, }, "<");
  });

  // social icons animation
  contactInfoTL
    .from(".contact-section .contact__social__item", { autoAlpha: 0 })
    .from(".contact-section .contact__social__item", { y: 50, stagger: 0.2 }, "<");
}

// contact form animation
export function animContactForm() {
  const contactForm = document.querySelector(".contact-section .contact__form");

  if (!contactForm) { return; }

  gsap
    .timeline({
      scrollTrigger: {
        trigger: ".contact-section .contact__form",
        start: "top 80%",
        end: "top 50%",
        scrub: 0.3,
      },
    })
    .from(".contact-section .contact__form", { autoAlpha: 0, scale: 0.7 });
}
