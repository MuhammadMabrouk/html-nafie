/*------------------------------------------------------------------------------------------*/
/* Toast Notifications Component */
/*------------------------------------------------------------------------------------------*/

const toastNotifications = document.querySelector(".notifications");

// add toast notification
export function addNotification({ id, type, msg }) {

  // return if disabled
  if (!toastNotifications) { return; }

  const notificationLength = toastNotifications.children.length;
  const notifyId = id || `${Date.now()}${notificationLength}`;
  const addNotify = () => {
    toastNotifications.insertAdjacentHTML("beforeend",
    `<li id="${notifyId}" class="notifications__item notify-enter ${type}">
      <div class="notifications__icon"></div>
      <span class="notifications__text">${msg}</span>
      <button class="notifications__dismiss"></button>
    </li>`);
  };

  if (id) {
    !toastNotifications.querySelector(`#${id}`) && addNotify();
  } else {
    addNotify();
  }
}

// remove toast notification
function removeNotification(e) {
  if (e.target?.classList.contains("notifications__dismiss")) { 
    const notification = e.target.parentElement;

    notification.classList.remove("notify-enter");
    setTimeout(() => notification.classList.add("notify-leave"));

    notification.addEventListener("animationend", () => notification.remove());
  }
}
toastNotifications.addEventListener("click", removeNotification);
